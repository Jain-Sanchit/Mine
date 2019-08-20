const express=require('express')

const hbs=require('hbs')

const mongoose=require('mongoose')

const app=express()

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

app.use('/',require('./routes/index'))

app.use('/add',require('./routes/addP'))

app.listen(8080,()=>{
    console.log("Running on 8080 !!");
    
})