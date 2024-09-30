import express, { json } from 'express';
import mpesaRoutes from './mpesaRoutes';
import { config } from 'dotenv';

config();  // Load environment variables

const app = express();
app.use(json()); // Enable parsing of JSON requests

// Register M-Pesa routes
app.use('/api', mpesaRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
