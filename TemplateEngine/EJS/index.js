const express = require('express');

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let languages = ["c", "js", "py", "go"];

app.get('/', (req, res) => {
    res.status("index", { pageTitle: "Home Page", progLang: languages });
});
app.post('/', (req, res) => {
    const progLang = req.body.progLang;
    console.log(progLang);

    languages.push(progLang);
    
    res.redirect("/")
});

app.get('/contact', (req, res) => {
    res.render("contact", { pageTitle: "Contact Page" });
});

app.listen(PORT, () => {
    console.log(`server at http://localhost:${PORT}`);
})