# Stripe Integration - Quick Start Checklist

## ✅ What's Been Implemented

### Backend (Netlify Functions)

- ✅ `create-checkout-session.js` - Creates Stripe checkout sessions with 14-day free trial
- ✅ `create-portal-session.js` - Manages customer billing portal access
- ✅ `stripe-webhook.js` - Handles subscription lifecycle events

### Frontend Components

- ✅ Updated `Pricing.tsx` with Stripe checkout integration
- ✅ Updated `CTA.tsx` with checkout redirect
- ✅ Created `Success.tsx` page for post-checkout confirmation
- ✅ Added `/success` route to App.tsx

### Payment Utilities

- ✅ `lib/stripe.ts` - Stripe configuration and Price IDs
- ✅ `lib/payment.ts` - Payment helper functions
- ✅ Stripe.js integration for client-side checkout

### Dependencies

- ✅ Installed `stripe` (server-side SDK)
- ✅ Installed `@stripe/stripe-js` (client-side SDK)

## 🔧 Required Setup Steps

Follow these steps to enable Stripe payments:

### 1. Create Stripe Account

- [ ] Sign up at https://stripe.com
- [ ] Verify your business details

### 2. Create Products in Stripe Dashboard

Go to https://dashboard.stripe.com/products

- [ ] **Starter Plan**: $20/month, 20 runs
  - Copy Price ID → `VITE_STRIPE_PRICE_STARTER`
- [ ] **Professional Plan**: $50/month, 50 runs
  - Copy Price ID → `VITE_STRIPE_PRICE_PROFESSIONAL`
- [ ] **Growth Plan**: $100/month, 100 runs
  - Copy Price ID → `VITE_STRIPE_PRICE_GROWTH`

### 3. Get API Keys

Go to https://dashboard.stripe.com/apikeys

- [ ] Copy **Publishable key** (pk*test*...)
- [ ] Copy **Secret key** (sk*test*...)

### 4. Configure Webhook

Go to https://dashboard.stripe.com/webhooks

- [ ] Add endpoint: `https://startupopsv1.netlify.app/.netlify/functions/stripe-webhook`
- [ ] Select events:
  - `checkout.session.completed`
  - `customer.subscription.created`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
  - `invoice.payment_succeeded`
  - `invoice.payment_failed`
- [ ] Copy **Signing secret** (whsec\_...)

### 5. Set Environment Variables in Netlify

Go to Netlify Dashboard → Site settings → Environment variables

**Add these variables:**

```bash
# Stripe Keys
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_secret_here

# Frontend Variables (also add to Build environment variables)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
VITE_STRIPE_PRICE_STARTER=price_xxx_starter
VITE_STRIPE_PRICE_PROFESSIONAL=price_xxx_professional
VITE_STRIPE_PRICE_GROWTH=price_xxx_growth
```

⚠️ **IMPORTANT**: After adding variables, trigger a new deployment!

### 6. Test the Integration

Use Stripe test cards:

- [ ] Test card: `4242 4242 4242 4242` (Success)
- [ ] Expiration: Any future date
- [ ] CVC: Any 3 digits
- [ ] ZIP: Any 5 digits

**Test Flow:**

1. [ ] Click "Start Free Trial" on Pricing page
2. [ ] Complete checkout with test card
3. [ ] Verify redirect to Success page
4. [ ] Check Stripe Dashboard for test subscription
5. [ ] Verify webhook events in Stripe Dashboard

### 7. Enable Customer Portal

- [ ] Go to Settings → Billing → Customer portal
- [ ] Activate portal
- [ ] Configure allowed actions (cancel, update payment, etc.)

### 8. Go Live (When Ready)

- [ ] Switch to Live mode in Stripe
- [ ] Create live products and prices
- [ ] Get live API keys (pk*live*... and sk*live*...)
- [ ] Update Netlify environment variables with live keys
- [ ] Update webhook to live mode
- [ ] Final testing with real card

## 📝 Features Included

### Checkout

- ✅ 14-day free trial (configurable)
- ✅ Automatic email receipts
- ✅ Promotion code support
- ✅ Billing address collection
- ✅ Success/cancel URL redirects

### Customer Portal

- ✅ Update payment method
- ✅ View billing history
- ✅ Cancel subscription
- ✅ Download invoices

### Security

- ✅ Webhook signature verification
- ✅ Environment variable protection
- ✅ CORS headers configured
- ✅ Error handling

## 🚀 Next Steps (Optional Enhancements)

- [ ] Set up database to store subscription data (Supabase/Firebase)
- [ ] Implement user authentication
- [ ] Create user dashboard showing active subscription
- [ ] Add email notifications for subscription events
- [ ] Track automation usage per user
- [ ] Implement usage-based billing for Enterprise
- [ ] Add analytics for conversion tracking
- [ ] Create admin panel to manage subscriptions

## 📚 Documentation

- Full setup guide: `STRIPE-SETUP.md`
- Stripe Docs: https://stripe.com/docs
- Test Cards: https://stripe.com/docs/testing

## 🆘 Troubleshooting

**Error: "Stripe Price ID not configured"**

- Make sure environment variables are set in Netlify
- Redeploy after adding env vars
- Check variable names match exactly

**Webhook not firing**

- Verify webhook URL is correct
- Check Stripe Dashboard → Webhooks → Logs
- Ensure STRIPE_WEBHOOK_SECRET is set

**Need Help?**

- Stripe Support: support@stripe.com
- StartupOPS: gonzalo@menatech.cloud
