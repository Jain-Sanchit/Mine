const express=require('express')

const app=express()

const hbs=require('hbs')

const {insertData}=require('./database')


app.set('view engine','hbs');




const router = express.Router();


// app.get('/',(req,res)=>{
//     res.render('home')
// })
app.use(express.urlencoded({extended: true}))

app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))



app.listen(8080,()=>{
    console.log("Running on 8080 !!");
    
})