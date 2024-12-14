const unirest = require('unirest');
const config = require('./mpesaConfig');

// Utility to generate M-Pesa OAuth token
exports.generateToken = () => {
  return new Promise((resolve, reject) => {
    const req = unirest("GET", `${config.baseURL}/oauth/v1/generate`);

    const credentials = Buffer.from(`${config.consumerKey}:${config.consumerSecret}`).toString('base64');
    
    req.query({ "grant_type": "client_credentials" });
    req.headers({ "Authorization": `Basic ${credentials}` });
    
    req.end(response => {
      if (response.error) {
        reject(response.error);
      } else {
        resolve(response.body.access_token);
      }
    });
  });
};
