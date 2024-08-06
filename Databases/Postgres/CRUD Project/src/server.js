import express from 'express';
import { getBooks, getBookId, createCollection, deleteBooks, putBooks } from './routes/index.js';

const app = express();
const PORT = 3001;

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

app.get('/books', getBooks);
app.get('/books/:id', getBookId);
app.post('/books/', createCollection);
app.delete('/books/:id', deleteBooks);
app.put('/books/:id', putBooks);

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);

})