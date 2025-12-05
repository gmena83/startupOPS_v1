const Stripe = require("stripe");

exports.handler = async (event) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const sig = event.headers["stripe-signature"];

  let stripeEvent;

  try {
    // Verify webhook signature
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      webhookSecret,
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: `Webhook Error: ${err.message}` }),
    };
  }

  // Handle different event types
  try {
    switch (stripeEvent.type) {
      case "checkout.session.completed": {
        const session = stripeEvent.data.object;
        console.log("Checkout session completed:", session.id);
        // TODO: Save subscription data to your database
        // - session.customer (Stripe customer ID)
        // - session.subscription (Stripe subscription ID)
        // - session.customer_email
        break;
      }

      case "customer.subscription.created": {
        const subscription = stripeEvent.data.object;
        console.log("Subscription created:", subscription.id);
        // TODO: Create or update user subscription in database
        break;
      }

      case "customer.subscription.updated": {
        const subscription = stripeEvent.data.object;
        console.log("Subscription updated:", subscription.id);
        // TODO: Update subscription status in database
        // - Handle trial ending: subscription.trial_end
        // - Handle plan changes: subscription.items.data
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = stripeEvent.data.object;
        console.log("Subscription deleted:", subscription.id);
        // TODO: Mark subscription as cancelled in database
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = stripeEvent.data.object;
        console.log("Payment succeeded:", invoice.id);
        // TODO: Send receipt email, extend subscription period
        break;
      }

      case "invoice.payment_failed": {
        const invoice = stripeEvent.data.object;
        console.log("Payment failed:", invoice.id);
        // TODO: Send payment failure notification
        break;
      }

      default:
        console.log(`Unhandled event type: ${stripeEvent.type}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (error) {
    console.error("Error processing webhook:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Webhook processing failed",
        message: error.message,
      }),
    };
  }
};
