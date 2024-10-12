import express from 'express';
import cors from 'cors';
import router from './app/route';
import globalErrorHandler from './app/error/globalErrorHandler';
import notFound from './app/error/notFound';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      'https://tech-tuned-services-frontend.vercel.app',
      'http://localhost:5173',
    ],
    credentials: true,
  })
);
app.use('/api', router);
app.get('/', (req, res) => {
  res.send('techtuend servics data is comming...');
});

app.use(globalErrorHandler);
app.use(notFound);
export default app;
