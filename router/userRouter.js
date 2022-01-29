const router = require('express').Router();
const User=require("../models/userModel")




router.get('/', async(req,res)=>{
    const tumUserlar=await User.find({});
    res.json(tumUserlar)
});

router.post('/',async(req,res)=>{
try{
const ekleencekUser=new User(req.body);
const sonuc=await ekleencekUser.save();
res.send(sonuc);

}catch(err){
    console.log("hata"+err)
}
});


module.exports = router;