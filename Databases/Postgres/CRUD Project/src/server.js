const express = require('express');
const { getBooks, getBookId } = require('./routes/GetBooks');
const { createCollection } = require('./routes/PostBooks');
const { deleteBooks, putBooks } = require('./routes/Put_DeleteBooks');

const app = express();
const PORT = 3001;

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);

})  

app.get('/books',getBooks);
app.get('/books/:id',getBookId);
app.post('/books/',createCollection);
app.delete('/books/:id',deleteBooks);
app.put('/books/:id',putBooks);