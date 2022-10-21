import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userName: {
        type:String,
        required: [true, "Pas de nom d'utilisateur"]
    },
    mail: {
        type:String,
        required: [true, "Pas d'adresse Email"]
    },
    password: {
        type:String,
        required: [true, "Pas de mot de passe"]
    },
    cards: {type: [{ type: mongoose.Schema.Types.ObjectId, ref: "card" }]},
    wallet: {
        type:Number,
        required: [true, "Pas de Seven Coins"],
        default: 300
    },
  
})




const userModel = mongoose.model('users', userSchema)
export default userModel