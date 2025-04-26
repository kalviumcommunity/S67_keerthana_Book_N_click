const User = require('../Model/UserModel')
const express = require('express')
const UserRouter = express.Router()

UserRouter.post('/user', async (req, res) => {
    try {
      const { name, email, password, role, profilePic, addresses } = req.body;
  
      if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email, and password are required." });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists with this email." });
      }
  
      const newUser = new User({
        name,
        email,
        password,
        role,
        profilePic,
        addresses,
      });
  
      await newUser.save();
      res.status(201).json({ message: "User created successfully!", data: newUser });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

UserRouter.get('/user',async(req,res)=>{
    try{
        const users = await User.find();
        return res.status(201).json(users)
    }catch(err){
        res.status(500).json({ error: err.message });
    }
})

module.exports = UserRouter