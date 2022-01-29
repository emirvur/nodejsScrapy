const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KitapSchema = new Schema({
    kitapisim: {
        type: String,
     //   required: true,

    },
    fiyat: {
        type: Number,
       // required: [true],
 
    },
    yazar: {
        type: String,
     //   required: true,

    },
    yayinevi: {
        type: String,
       // required: [true],
 
    },
   
  
}//, { collection: 'test', timestamps:true }
);
const Kitap=mongoose.model("Kitap",KitapSchema);
module.exports = Kitap;