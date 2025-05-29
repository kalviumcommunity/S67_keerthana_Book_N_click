const User = require('../Model/UserModel')
const express = require('express')
const UserRouter = express.Router()
const jwt = require('jsonwebtoken')
const authmiddleware = require('../Middleware/authmiddleware')

UserRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 🔐 JWT Token Generation inline
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your_fallback_secret',
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

UserRouter.get('/profile', authmiddleware, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
});


UserRouter.get('/user',async(req,res)=>{
    try{
        const users = await User.find();
        return res.status(201).json(users)
    }catch(err){
        res.status(500).json({ error: err.message });
    }
})

UserRouter.put('/user/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User updated successfully", data: updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = UserRouter