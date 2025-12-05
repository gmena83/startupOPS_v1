import { loadStripe } from "@stripe/stripe-js";
import {
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_PRICE_IDS,
  API_ENDPOINTS,
} from "./stripe";

let stripePromise: ReturnType<typeof loadStripe> | null = null;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export const createCheckoutSession = async (
  priceId: string,
  email?: string,
): Promise<{ sessionId: string; url: string }> => {
  const response = await fetch(API_ENDPOINTS.createCheckoutSession, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ priceId, email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create checkout session");
  }

  return response.json();
};

export const createPortalSession = async (
  customerId: string,
): Promise<{ url: string }> => {
  const response = await fetch(API_ENDPOINTS.createPortalSession, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ customerId }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create portal session");
  }

  return response.json();
};

export const redirectToCheckout = async (
  tier: "starter" | "professional" | "growth",
  email?: string,
) => {
  try {
    const priceId = STRIPE_PRICE_IDS[tier];

    if (!priceId || priceId.includes("xxx")) {
      throw new Error(
        "Stripe Price ID not configured. Please set up your Stripe products first.",
      );
    }

    const { url } = await createCheckoutSession(priceId, email);

    if (url) {
      window.location.href = url;
    } else {
      throw new Error("No checkout URL returned");
    }
  } catch (error) {
    console.error("Checkout error:", error);
    throw error;
  }
};

export const redirectToPortal = async (customerId: string) => {
  try {
    const { url } = await createPortalSession(customerId);

    if (url) {
      window.location.href = url;
    } else {
      throw new Error("No portal URL returned");
    }
  } catch (error) {
    console.error("Portal error:", error);
    throw error;
  }
};
