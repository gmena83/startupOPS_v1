# Stripe Integration Setup Guide

This guide will help you set up Stripe payments for StartupOPS subscriptions.

## Prerequisites

- Stripe account (create one at https://stripe.com)
- Access to Netlify dashboard for environment variables

## Step 1: Create Stripe Products and Prices

1. **Log in to Stripe Dashboard**: https://dashboard.stripe.com

2. **Create Products**:
   - Go to Products → Create Product
   - Create 3 products (Starter, Professional, Growth)
   
   **Starter Plan**:
   - Name: StartupOPS Starter
   - Description: 20 automation runs per month
   - Price: $20/month (recurring)
   - Copy the Price ID (starts with `price_`)
   
   **Professional Plan**:
   - Name: StartupOPS Professional
   - Description: 50 automation runs per month
   - Price: $50/month (recurring)
   - Copy the Price ID
   
   **Growth Plan**:
   - Name: StartupOPS Growth
   - Description: 100 automation runs per month
   - Price: $100/month (recurring)
   - Copy the Price ID

3. **Enable Free Trial** (Optional):
   - For each price, go to Price settings
   - Enable "Allow customers to choose their trial period"
   - Or configure default trial in the checkout session (already set to 14 days in code)

## Step 2: Get Your Stripe API Keys

1. Go to **Developers → API keys** in Stripe Dashboard

2. Copy your keys:
   - **Publishable key** (starts with `pk_test_` or `pk_live_`)
   - **Secret key** (starts with `sk_test_` or `sk_live_`)

## Step 3: Set Up Stripe Webhook

1. Go to **Developers → Webhooks** in Stripe Dashboard

2. Click **Add endpoint**

3. Configure:
   - **Endpoint URL**: `https://startupopsv1.netlify.app/.netlify/functions/stripe-webhook`
   - **Events to listen to**:
     - `checkout.session.completed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.payment_succeeded`
     - `invoice.payment_failed`

4. **Copy the Signing Secret** (starts with `whsec_`)

## Step 4: Configure Environment Variables in Netlify

1. Go to your Netlify dashboard
2. Navigate to: **Site settings → Environment variables**
3. Add the following variables:

```bash
# Stripe Secret Key (KEEP THIS SECRET!)
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Stripe Webhook Secret
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Your deployed site URL
URL=https://startupopsv1.netlify.app
```

4. Add frontend environment variables:
   - Go to **Build & deploy → Environment variables**
   - Add these variables:

```bash
# Stripe Publishable Key (safe to expose)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# Stripe Price IDs
VITE_STRIPE_PRICE_STARTER=price_xxxxxxxxxxxxx
VITE_STRIPE_PRICE_PROFESSIONAL=price_xxxxxxxxxxxxx
VITE_STRIPE_PRICE_GROWTH=price_xxxxxxxxxxxxx
```

## Step 5: Update Local Development

Create a `.env` file in the `frontend/` directory:

```bash
# Frontend environment variables
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
VITE_STRIPE_PRICE_STARTER=price_xxxxxxxxxxxxx
VITE_STRIPE_PRICE_PROFESSIONAL=price_xxxxxxxxxxxxx
VITE_STRIPE_PRICE_GROWTH=price_xxxxxxxxxxxxx
```

Create a `.env` file in the root directory for Netlify functions:

```bash
# Backend environment variables
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
URL=http://localhost:5173
```

⚠️ **IMPORTANT**: Add `.env` to your `.gitignore` file!

## Step 6: Test the Integration

### Test Mode:
1. Use test API keys (start with `pk_test_` and `sk_test_`)
2. Use Stripe test cards: https://stripe.com/docs/testing
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`

### Test Flow:
1. Click "Start Free Trial" on any pricing tier
2. You should be redirected to Stripe Checkout
3. Use test card: `4242 4242 4242 4242`
   - Any future expiration date
   - Any 3-digit CVC
   - Any ZIP code
4. Complete checkout
5. You should be redirected to `/success` page
6. Check Stripe Dashboard → Payments to see the test subscription

## Step 7: Enable Customer Portal

1. Go to **Settings → Billing → Customer portal** in Stripe Dashboard
2. **Activate** the customer portal
3. Configure settings:
   - Allow customers to update payment methods
   - Allow customers to cancel subscriptions
   - Allow customers to update billing information

## Step 8: Go Live

When ready to accept real payments:

1. **Switch to Live Mode** in Stripe Dashboard
2. Create production products and prices (same as test mode)
3. Get live API keys (start with `pk_live_` and `sk_live_`)
4. Update Netlify environment variables with **live keys**
5. Update webhook endpoint to use live mode
6. Test thoroughly before announcing!

## Webhook Event Handling

The webhook handler (`stripe-webhook.js`) currently logs events. To fully integrate:

1. Set up a database (e.g., Supabase, Firebase, MongoDB)
2. Update `stripe-webhook.js` to save subscription data:
   - Store customer ID and subscription ID
   - Track subscription status changes
   - Handle trial endings
   - Process payment failures

## Security Best Practices

✅ **DO**:
- Keep secret keys in environment variables
- Use webhook signatures to verify events
- Enable HTTPS for all endpoints
- Implement rate limiting on functions

❌ **DON'T**:
- Commit API keys to Git
- Expose secret keys in frontend code
- Trust client-side data without verification
- Skip webhook signature verification

## Troubleshooting

### Checkout not redirecting
- Check that Price IDs are correct in environment variables
- Verify VITE_STRIPE_PUBLISHABLE_KEY is set
- Check browser console for errors

### Webhooks not firing
- Verify webhook URL is correct
- Check Stripe Dashboard → Developers → Webhooks → Logs
- Ensure STRIPE_WEBHOOK_SECRET is set correctly

### "Stripe Price ID not configured" error
- Make sure environment variables are set in Netlify
- Redeploy your site after adding env vars
- Check that variable names match exactly

## Next Steps

1. Implement user authentication
2. Create a database to store subscription data
3. Build a user dashboard to show active subscription
4. Add email notifications for subscription events
5. Implement usage tracking for automation runs
6. Add metered billing for Enterprise plan

## Support

- Stripe Documentation: https://stripe.com/docs
- Stripe Support: support@stripe.com
- StartupOPS Support: gonzalo@menatech.cloud
