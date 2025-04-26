const Photographer = require('../Model/PhotographerSchema')
const {Router} = require('express')

const photographerRouter = Router();


photographerRouter.post("/photographer",async(req,res)=>{
    try{
        const { name, email, password, servicesOffered, location, availability, bio, portfolio,price } = req.body;
        if(!name && !email && !location && !availability && !portfolio){
            return res.status(200).json({message:"please fill the form completly"})
        }
        const newPhotographer = new Photographer({
            name,
            email,
            password,
            servicesOffered,
            location,
            availability, // expects array of date strings
            bio,
            portfolio,
            price,
          });
      
          await newPhotographer.save();
        
        return res.status(200).json({message:"new photographer added",data:newPhotographer})
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

photographerRouter.get("/photographer/:id",async(req,res)=>{
    try{
        const allphotographer = await Photographer.findById(req.params.id);
        res.status(200).json(allphotographer)
    }catch (err) {
        res.status(500).json({ message: 'Failed to fetch photographers', error: err.message });
      }
})

photographerRouter.put('/photographer/:id',async(req,res)=>{
    try{
        const updated = await Photographer.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updated){
            return res.status(400).json({message:"Photographer not found"})
        }
        return res.json(updated)
    }catch(err){
        return res.json(err.message)
    }
})
  
module.exports = photographerRouter;