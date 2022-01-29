const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/kitaps',{ useUnifiedTopology:true,useNewUrlParser:true}).then(
    ()=>console.log("veri tabani baglanildi")
).catch(hata=>console.log("db baglanti hata"+hata))