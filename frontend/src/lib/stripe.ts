// Stripe Price IDs for each subscription tier
// These need to be created in your Stripe Dashboard first
// https://dashboard.stripe.com/products

export const STRIPE_PRICE_IDS = {
  // Replace these with your actual Stripe Price IDs
  starter: import.meta.env.VITE_STRIPE_PRICE_STARTER || 'price_starter_xxx',
  professional: import.meta.env.VITE_STRIPE_PRICE_PROFESSIONAL || 'price_professional_xxx',
  growth: import.meta.env.VITE_STRIPE_PRICE_GROWTH || 'price_growth_xxx',
  // Enterprise is custom pricing, handle separately
};

export const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '';

// API endpoints for Netlify functions
export const API_ENDPOINTS = {
  createCheckoutSession: '/.netlify/functions/create-checkout-session',
  createPortalSession: '/.netlify/functions/create-portal-session',
  stripeWebhook: '/.netlify/functions/stripe-webhook',
};
