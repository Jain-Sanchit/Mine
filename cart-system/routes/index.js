const express=require('express')

const router=express.Router()
router.use(express.urlencoded({extended: true}))
const item=require('../models/User');

item.find(()=>{
    console.log(name);
    
})

router.get('/',(req,res)=>{
    res.render('home')
})

router.get('/dashboard',(req,res)=>{
    res.render('dashboard',{item});
})


module.exports = router;