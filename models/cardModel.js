import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema({
    nameCard: {
        type:String,
        required: [true, "Pas de nom de collection"]
    },
    categoryCard: {
        type:String,
        required: [true, "Pas de categorie"]
    },
    priceCard: {
        type:Number,
        required: [true, "Pas de nombre de carte"]
    },
    imageCard: {
        type:String,
        default: "carouselOne.png"
    },
    ifAvalaible: {type: Number, default: 1},
    collections: {type: mongoose.Schema.Types.ObjectId, ref: "Collection"},
    users: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const cardModel = mongoose.model('card', cardSchema)
export default cardModel 