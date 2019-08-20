const express=require('express')

const router=express.Router()


const item = require('../models/User');
router.use(express.urlencoded({extended: true}))
router.get('/item',(req,res)=>{
    
    
    res.render('add')
})

router.post('/item',(req,res)=>{
    const { name, price,discount,discprice } = req.body;
    const newItem = new item({
        name,
        price,
        discount,
        discprice
        
      });

      newItem.save().then(item1 => {
                    console.log(item1);
                    res.redirect('/');
      }).catch(err => console.log(err));
      
      
})
module.exports = router;