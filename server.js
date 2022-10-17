import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import adminRouter from "./routes/adminRouter.js";
import visitorRouter from "./routes/visitorRouter.js";
import cors from "cors";
import session from "express-session";
import "dotenv/config";
import collectionModel from "./models/collectionModel.js";
import userModel from "./models/userModel.js";

const db = process.env.BDD_URL;
const app = express();
const router = express.Router();

app.use(
  session({
    secret: process.env.SECRET_KEY,
    saveUninitialized: true,
    resave: true,
  })
);
app.use(cors());
app.use(express.static("./assets"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
router.use(userRouter);
router.use(adminRouter);
router.use(visitorRouter);

//global route
router.get("/*", function (req, res) {
  res.redirect("/");
});

router.post("/getCollections", async (req, res) => {
  let payload = req.body.payload.trim();
  let search = await userModel
    .find({ userName: { $regex: new RegExp("^" + payload + ".*", "i") } })
    .exec();
  search = search.slice(0, 10);
  res.send({ payload: search });
});

app.listen(process.env.PORT, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`connected to ${process.env.APP_URL}`);
  }
});

mongoose.connect(db, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to database mongodb (c'est dur....)");
  }
});

export default router;
