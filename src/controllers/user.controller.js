import { User } from "../models/user.model.js";

export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        const user = await User.create({name, email, password});
        
        res.status(201).json({message: "User registered successfully", user});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }
        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid password"});
        }
        res.status(200).json({message: "User logged in successfully", user});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}

export const logoutUser = async (_req, res) => {
    try {
        res.status(200).json({message: "User logged out successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}