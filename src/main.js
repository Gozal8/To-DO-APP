const express = require("express");
const morgan = require('morgan');
const path = require('path');

const app = express();   

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

 
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, 'views'));


const indexRouter = require('./routes/index.routes.js');
app.use('/', indexRouter);     


app.use(morgan("tiny"));

app.get("/", (req, res) =>{
    res.render("index", {title: "Hello from server👋", isTest: false});
});

app.use((req, res) => {  
        res.status(404).render('error', { title: '404', message: 'Page Not Found' });
    });

  app.listen(4000, "localhost", () => {
    console.log(`Listening on port ${4000}`);
  })


