const express = require('express')
const morgan = require('morgan')
const bodyParser = require("body-parser");
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

const layout = require('./views/layout')
const { db, Page, User } = require('./models');
const app = express();


app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);

//send our main page over to the router we created:
app.get('/', (req, res) => {
    res.redirect('/wiki')
})

db.authenticate()
    .then(() => {
        console.log('connected to the database');
    })

//sync our database & setting our port:
const PORT = 3000;
const init = async () => {
    await db.sync({ force: true });
    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
    });
}

init();

