const express = require('express');
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const session = require('express-session')
require('dotenv').config();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cookieParser('secret'))
app.use(session({
    cookie: {
        maxAge: null
    }
}))

//connect to mongodb
mongoose.connect("mongodb+srv://james-admin:jamesmoseley@cluster0.ucovw.mongodb.net/mongo-test-site", { useUnifiedTopology: true }, { useNewUrlParser: true })

//schema that is sent to mongodb
const notesSchema= {
    n: String, 
    email: String,
    phone: String
}

const Note = mongoose.model("Note", notesSchema);

//pop up alert
// app.use((req, res, next)=> {
//     res.locals.message = req.session.message
//     delete req.session.message
//     next()
// })

app.post("/", function(req, res) {
    let newNote = new Note({
        n: req.body.n,
        email: req.body.email,
        phone: req.body.phone
    });
    newNote.save();
    // req.session.message = {
    //     message: 'Thanks for signing up! We will get back to you shortly!'
    // }
    res.redirect("/alert");
})


const handlebars = require('express-handlebars');

app.set('view engine', 'hbs')
app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index'
}));

//allow access to public folder
app.use(express.static('public'));

//renders pages in get req
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
    console.log("App is running on port 5000")
})



// twilio

const accountSid=process.env.TWILIO_ACCOUNT_SID;
const authToken=process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const num = '+16263213720'

app.get('/alert', (req, res) =>  {
    textMessage();
    res.send(`
    <div style="text-align: center; padding: 4rem">
        <h1>Thanks for signing up.  An instructor will get back to you shortly.</h1>
        <a href="/signup">Go Back</a>
        </div>
    `);
})

function textMessage() {
    client.messages.create({
            body: 'Do not respond to this message...Thanks for signing up! Our instructors will respond soon!',
            from: '+12075172239',
            to: num
        })
        .then(message=>console.log(message))
        .catch((err)=>console.log(err));
}