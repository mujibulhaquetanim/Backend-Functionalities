import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-output.json';

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});