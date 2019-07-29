const express=require('express')



const passport =require('passport')

const hbs=require('hbs')

const mongoose=require('mongoose')

const flash = require('connect-flash');
const session = require('express-session');

const app=express()

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('ifnoteq', function (a, b, options) {
  if (a != b) { return options.fn(this); }
  return options.inverse(this);
});


//passsport
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.set('view engine','hbs')
app.use(express.urlencoded({extended: true}))

//session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});



app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))



app.listen(8080,()=>{
    console.log("Running on 8080 !!");
    
})