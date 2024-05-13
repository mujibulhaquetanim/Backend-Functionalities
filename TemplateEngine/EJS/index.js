const express = require('express');

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

let languages = ["c", "js", "py", "go"];

app.get('/', (req, res) => {
    res.status("index", { pageTitle: "Home Page", progLang: languages });
});
app.post('/', (req, res) => {
    res.status(201).send("new lang created");
});

app.get('/contact', (req, res) => {
    res.render("contact", { pageTitle: "Contact Page" });
});

app.listen(PORT, () => {
    console.log(`server at http://localhost:${PORT}`);
})