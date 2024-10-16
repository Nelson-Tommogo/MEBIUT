import unirest from 'unirest';

let req = unirest('POST', 'https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest')
    .headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer F9oc3lwdfN19A9dqtVEzi4lPuYJn'
    })
    .send(JSON.stringify({
        "Initiator": "testapi", // Make sure this is a string
        "SecurityCredential": "H3TcHB0vG3kQYPmoaunCe0lCNsqSwm0PtFYrDWz2S3S7f5um9LRKDqKc3Hb972l7wLeVSwuLxQH7VJvOApWIS1syVa27/pNm0TIL0NoBUEyKlSgabFSCw2aj3AqTY+3/+7rTIIRrrBSQu3PxtIt8oRAtIrZ/r44+ddL4hVbB7BmRFFvtG3h2c2b4I6n6mozvVnNWPls7tWGnNb2atgt49mNavQpU57sSV7Can2yw7TzY1JWvkmHYNpyKIeIQsBBD8XmxdSOPwgdbGo4ahst7i9+FLgJhIz5H0yAQ7DGJvZJspyBPt+aKaHJ20WbMcbM1VEdTNXAyuhBfohZwr1G06Q==",
        "CommandID": "BusinessPayBill",
        "SenderIdentifierType": "4",
        "RecieverIdentifierType": 4,
        "Amount": 1,
        "PartyA": 600980,
        "PartyB": 600000,
        "AccountReference": "353353",
        "Requester": "254708374149",
        "Remarks": "ok",
        "QueueTimeOutURL": "https://mydomain.com/b2b/queue/",
        "ResultURL": "https://mydomain.com/b2b/result/"
    }))
    .end(res => {
        if (res.error) throw new Error(res.error);
        console.log(res.raw_body);
    });


    //Endpoint: https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest(Post)
