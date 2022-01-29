const router = require('express').Router();
const Kitap=require("../models/kitapModel")




router.get('/', async(req,res)=>{
    console.log("kitapta")
    const tumKitaplar=await Kitap.find({});
    res.json(tumKitaplar)
});

router.get('/altinda/:id', async(req,res)=>{
    const {id} = req.params;
    console.log("kitapta")
    const tumKitaplar=await Kitap.find({fiyat: {$lte: id}});

    res.json(tumKitaplar)
});

router.get('/yazar/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        console.log(id)
        console.log()
        const yazarkitap=await Kitap.find({"yazar":id});

        return res
        .status(200)
        .json({
            data:yazarkitap
        });   
    }catch(err){
        console.log("hata"+err)
    }
    });

    router.get('/siralama/:id',async(req,res)=>{
        try{
            const {id} = req.params;
            console.log(id)
            const tumorder=await Kitap.find().sort(id);
    
            return res
            .status(200)
            .json({
                data:tumorder
            });   
        }catch(err){
            console.log("hata"+err)
        }
        });




module.exports = router;