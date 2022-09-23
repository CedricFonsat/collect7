import cardModel from "../models/cardModel.js";
export class cardController {

    static async setAddCard(req) {
        req.body.imageCard = req.file.filename;
        let cards = new cardModel(req.body)
        await cards.save()
    }
}

export default cardController