import cardModel from "../models/cardModel.js";
import collectionModel from "../models/collectionModel.js";
export class cardController {

    static async setAddCard(req) {

        req.body.imageCard = req.file.filename;
        console.log(req.body.categoryCard)
        await collectionModel.updateOne({_id: req.body.categoryCard},{ $push: { cards: req.body.categoryCard } })
        
        let cards = new cardModel(req.body)
        
        await cards.save()
    }
}

export default cardController