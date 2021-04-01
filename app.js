const express = require('express');
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://james-admin:jamesmoseley@cluster0.ucovw.mongodb.net/mongo-test-site", { useUnifiedTopology: true }, { useNewUrlParser: true })

const notesSchema= {
    n: String, 
    email: String,
    phone: String
}

const Note = mongoose.model("Note", notesSchema);

app.post("/", function(req, res) {
    let newNote = new Note({
        n: req.body.n,
        email: req.body.email,
        phone: req.body.phone
    });
    newNote.save();
    res.redirect("/signup");
})

const handlebars = require('express-handlebars');

app.set('view engine', 'hbs')
app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index'
}));

app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.render('main');
});

app.get('/lesson', (req, res)=> {
    res.render('lesson');
});

app.get('/signup', (req, res)=> {
    res.render('signup');
});


app.get('/contact', (req, res)=> {
    res.render('contact');
});

app.get('/snow', (req, res)=> {
    res.render('snow');
});

app.listen(port, () => {
    console.log("App is listenign")
})
