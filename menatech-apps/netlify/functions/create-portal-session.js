const Stripe = require('stripe');

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const { customerId } = JSON.parse(event.body);

    if (!customerId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Customer ID is required' }),
      };
    }

    // Create a portal session for the customer to manage their subscription
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.URL || 'http://localhost:5173'}/#pricing`,
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    console.error('Error creating portal session:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to create portal session',
        message: error.message 
      }),
    };
  }
};
