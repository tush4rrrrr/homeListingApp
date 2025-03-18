import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    if(!password){
        return res.status(400).json({ error : "Password is required"});
    }
    try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password : hashedPassword});
    await user.save();
    res.json({ message : "User Registered "});
    } catch (error) {
        res.status(500).json({ error : "Server error "});
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user || !(await bcrypt.compare(password, user.password))){
        return res.status(401).json({ error : "Invalid Credentials "});
    }
    const token = jwt.sign({ id : user._id}, process.env.JWT_SECRET, {expiresIn : "1h"});
    res.json({ token });
});

export default router;