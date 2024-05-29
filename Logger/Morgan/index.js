import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    console.log(chalk.blue("'/' saying Hi 🙂"))
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log(chalk.green('listening on http://localhost:3000'));
});