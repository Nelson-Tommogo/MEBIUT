import unirest from 'unirest';
import { baseURL } from './mpesaConfig';
import { generateToken } from './mpesaUtils';

// STK Push function
export async function initiatePayment(req, res) {
  const { phoneNumber, amount, accountReference, transactionDesc } = req.body;

  try {
    const token = await generateToken();
    
    const paymentRequest = unirest("POST", `${baseURL}/mpesa/stkpush/v1/processrequest`);

    paymentRequest.headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });

    // Get the current timestamp in the format 'yyyyMMddHHmmss'
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
    
    // Encode password (base64(BusinessShortCode + Passkey + Timestamp))
    const shortCode = "174379";  // Business Short Code
    const passkey = "YourLipaNaMpesaOnlinePasskey";
    const password = Buffer.from(`${shortCode}${passkey}${timestamp}`).toString('base64');

    // Send the STK push request to Safaricom
    paymentRequest.send({
      "BusinessShortCode": shortCode, // Replace with your Business Shortcode
      "Password": password,
      "Timestamp": timestamp,
      "TransactionType": "CustomerPayBillOnline",
      "Amount": amount, // Amount to be paid
      "PartyA": phoneNumber, // Customer's phone number
      "PartyB": shortCode, // Paybill or Buy Goods number
      "PhoneNumber": phoneNumber, // Phone number initiating the payment
      "CallBackURL": "https://yourdomain.com/callback", // Your callback URL
      "AccountReference": accountReference || "AccountRef", // Reference for the payment, e.g., invoice number
      "TransactionDesc": transactionDesc || "Payment for goods" // Description of the transaction
    });

    paymentRequest.end(function (response) {
      if (response.error) {
        res.status(500).json({ error: response.error });
      } else {
        res.status(200).json(response.body); // Return Safaricom's response
      }
    });

  } catch (error) {
    res.status(500).json({ error: 'Payment initiation failed', details: error });
  }
}
