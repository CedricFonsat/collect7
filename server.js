import express from 'express';
import userRouter from './routes/userRouter.js'
import adminRouter from './routes/adminRouter.js'
import visitorRouter from './routes/visitorRouter.js'
import cors from 'cors'
import 'dotenv/config'


const app = express()
const router = express.Router()

app.use(cors())
app.use(express.static('./assets'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)
router.use(userRouter)
router.use(adminRouter)
router.use(visitorRouter)

//global route
router.get('/*', function(req, res) {
    res.redirect('/');
   });

app.listen(process.env.PORT, function(err){
    if (err) {
        console.log(err);
    }else{
        console.log(`connected to ${process.env.APP_URL}`);
    }
})