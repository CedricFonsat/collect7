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
    cardNumberCollection: {
        type:Number,
        required: [true, "Pas de nombre de carte"]
    },
    descriptionCollection: {
        type:String,
        required: [true, "Pas de description"]
    },
    imageCollection: {
        type:String,
        default: "carouselOne.png"
    },
})

const collectionModel = mongoose.model('collections', collectionSchema)
export default collectionModel 