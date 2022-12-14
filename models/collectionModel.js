import mongoose from 'mongoose'

const collectionSchema = new mongoose.Schema({
    nameCollection: {
        type:String,
        required: [true, "Pas de nom de collection"]
    },
    categoryCollection: {
        type:String,
        required: [true, "Pas de categorie"]
    },
    descriptionCollection: {
        type:String,
        required: [true, "Pas de description"]
    },
    imageCollection: {
        type:String,
        default: "carouselOne.png"
    },
    cards: {type: [{ type: mongoose.Schema.Types.ObjectId, ref: "card" }]}
})

const collectionModel = mongoose.model('collections', collectionSchema)
export default collectionModel 