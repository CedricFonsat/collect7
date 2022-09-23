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
})

const cardModel = mongoose.model('card', cardSchema)
export default cardModel 