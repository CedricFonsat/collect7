import userModel from "../models/userModel.js"
import { cryptPassword, comparePassword } from "../dependencies/bcrypt.js"
export class userController {

    static async setRegistration(req) {
        req.body.password = await cryptPassword(req.body.password)
        req.body.avatar = req.file.filename;
        let user = new userModel(req.body)
        await user.save()
        req.session.user = user._id
    }

    static async setLogin(req) {
        let user = await userModel.findOne({mail: req.body.mail })
        if (user) {
            if (await comparePassword(req.body.password, user.password)) {
                return user
            }
        }
        return null
    }
}

export default userController