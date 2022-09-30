import cardModel from "../models/cardModel.js";
import collectionModel from "../models/collectionModel.js";
export class cardController {

    static async setAddCard(req) {

        req.body.imageCard = req.file.filename;
        console.log(req.body.categoryCard)
        let card = new cardModel(req.body)
        await card.save()
        await collectionModel.updateOne({_id: req.body.categoryCard},{ $push: { cards: card._id } })
    }
}

export default cardController