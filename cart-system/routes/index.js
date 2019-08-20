const express=require('express')

const router=express.Router()
router.use(express.urlencoded({extended: true}))
router.get('/',(req,res)=>{
    res.render('home')
})

router.get('/dashboard',(req,res)=>{
    res.render('dashboard',{
        item
    })
})

module.exports = router;