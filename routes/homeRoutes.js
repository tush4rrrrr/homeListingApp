import express from "express";
import Home from "../models/home.model.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router.post("/list", authMiddleware, async (req, res) => {
    const { location, availableDates, description } = req.body;
    const home = new Home({ owner : req.user.id, location, availableDates, description});
    await home.save();
    res.json({ message : "Home listed successfully "});
});

router.get("/", async (req, res) => {
    console.log("Welcome to the Home Exhibition ");
    const homes = await Home.find();
    res.json(homes);
});

router.post("/book/:id", authMiddleware, async (req, res) => {
    try {
        const home = await Home.findById(req.params.id);
        if(!home) 
        return res.status(404).json({ error : "Home not found "});

        res.json({ message : "Booking Successful "});
    }
    catch(error){
        res.status(500).json({ error : "Server Error"});
    }
});

export default router;