import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.send('Hello from Lambda Image!');
});

app.get('/health', (_: Request, res: Response) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

export default app;
