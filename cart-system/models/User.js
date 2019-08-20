const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      },
      discount: {
        type: String,
        required: true
      },
      discprice: {
        type: String,
        required: true

      },
      date: {
        type: Date,
        default: Date.now
      }
});

const item=mongoose.model('item',userSchema)

module.exports=item;