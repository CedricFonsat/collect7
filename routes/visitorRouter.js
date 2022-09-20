import { Router } from "express";
import multer from "multer";
import userModel from "../models/userModel.js";
import 'dotenv/config'
import userController from "../controllers/userController.js";

const visitorRouter = Router();

const storage = multer.diskStorage({
  destination:function(req,file,callback){
    callback(null,'./assets/uploads/images' )
  },
  filename:function (req,file,callback) {
    callback(null,Date.now() + file.originalname)
  },
})
const upload = multer({
  storage:storage,
  limits:{
    fieldSize:1024*1024*3,
  },
});

// Route home \\

visitorRouter.get("/", async (req, res) => {
  try {
    res.render("home.twig");
  } catch (error) {
    res.send(error);
  }
});

// Registration

visitorRouter.get("/registration", async (req, res) => {
  try {
    res.render("pages/registration.twig");
  } catch (error) {
    res.send(error);
  }
});

visitorRouter.post("/registration",upload.single('image'), async (req, res) => {
  try {
    await userController.setRegistration(req,res)
    res.redirect("/connection")
    console.log('patrick');
  } catch (error) {
    res.send(error);
  }
});

// Route connection emporaire \\

visitorRouter.get("/connection", async (req, res) => {
  try {
    res.render("pages/connection.twig");
  } catch (error) {
    res.send(error);
  }
});

// Route lostPassword temporaire /!\

visitorRouter.get("/lostPassword", async (req, res) => {
  try {
    res.render("pages/lostPassword.twig");
  } catch (err) {
    res.send(err);
  }
});

// Route usermanuel \\

visitorRouter.get("/userManual", async (req, res) => {
  try {
res.render("pages/userManual.twig")
  } catch (error) {
    res.send(error);
  }
});

// Route contact \\

visitorRouter.get("/contact", async (req, res) => {
  try {
res.render("pages/contact.twig")
  } catch (error) {
    res.send(error);
  }
});





export default visitorRouter;
