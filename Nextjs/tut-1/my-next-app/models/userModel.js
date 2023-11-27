import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    
})

const User = mongoose.models.users || mongoose.model("User", userSchema)