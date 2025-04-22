const Photographer = require('../Model/PhotographerSchema')
const {Router} = require('express')

const photographerRouter = Router();


photographerRouter.post("/photographer",async(req,res)=>{
    try{
        const newphotographer = new Photographer(req.body);
        await newphotographer.save();
        return res.status(200).json({message:"new photographer added",data:newphotographer})
    } catch (err) {
        res.status(400).json({ message: 'Failed to add photographer', error: err.message });
      }
    
})

photographerRouter.get("/photographer",async(req,res)=>{
    try{
        const allphotographer = await Photographer.find();
        res.status(200).json(allphotographer)
    }catch (err) {
        res.status(500).json({ message: 'Failed to fetch photographers', error: err.message });
      }
})

module.exports = photographerRouter;