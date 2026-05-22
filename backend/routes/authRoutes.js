const express = require("express");

const bcrypt = require("bcryptjs");

const User = require("../models/User");

const router = express.Router();


// REGISTER

router.post("/register", async (req,res)=>{

  try{

    const { name,email,password } = req.body;

    const existingUser =
    await User.findOne({ email });

    if(existingUser){

      return res.status(400).json({
        message:"User already exists"
      });

    }

    const hashedPassword =
    await bcrypt.hash(password,10);

    const newUser = new User({

      name,
      email,
      password: hashedPassword

    });

    await newUser.save();

    res.json({
      message:"Registration Successful"
    });

  }catch(error){

    console.log(error);

    res.status(500).json({
      message:"Server Error"
    });

  }

});


// LOGIN

router.post("/login", async (req,res)=>{

  try{

    const { email,password } = req.body;

    const user =
    await User.findOne({ email });

    if(!user){

      return res.status(400).json({
        message:"User not found"
      });

    }

    const isMatch =
    await bcrypt.compare(
      password,
      user.password
    );

    if(!isMatch){

      return res.status(400).json({
        message:"Wrong password"
      });

    }

    res.json({

      user:{

        name:user.name,
        email:user.email

      }

    });

  }catch(error){

    console.log(error);

    res.status(500).json({
      message:"Server Error"
    });

  }

});

module.exports = router;