const express = require('express');
const { getBooks, getBookId } = require('./routes/GetBooks');

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);

})  

app.get('/books',getBooks);
app.get('/books/:id',getBookId);