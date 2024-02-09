//return all the books
async function getBooks(req, res) {
    try {
        res.status(200).json({ msg: "books are returned" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//get a book by id
async function getBookId(req,res) {
    try {
        const { id } = req.params;
        res.status(200).json({"msg":`book with id:${id} is available`});
    } catch (error) {
        res.status(500).json({error: error.message});

    }
}

module.exports = { getBooks,getBookId };