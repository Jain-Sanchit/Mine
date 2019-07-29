const express=require('express')

const router=express.Router();
const {insertData}=require('../database')


router.get('/register',(req,res)=>{
    res.render('register')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.post('/register',(req,res)=>{
    const newUser=req.body
    insertData(newUser).then(result =>{
        //console.log(result)
        res.redirect('/users/login')
    }
        )
})


router.post('/login',(req,res)=>{
    res.render('dashboard',{req})
})
module.exports = router;


  