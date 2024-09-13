import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './middleware/errorHandler';

dotenv.config();

const app = express();
app.use(express.json());

// Routes will go here

// Use error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is listening ar ${PORT}`);
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});
