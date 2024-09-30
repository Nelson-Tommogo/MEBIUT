require('dotenv').config();

export const consumerKey = process.env.MPESA_CONSUMER_KEY;
export const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
export const baseURL = 'https://sandbox.safaricom.co.ke/mpesa/b2c/v3/paymentrequest';
