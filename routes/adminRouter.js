import { Router } from "express";
import multer from "multer";
import collectionController from "../controllers/collectionController.js";

const adminRouter = Router();

const storage = multer.diskStorage({
  destination:function(req,file,callback){
    callback(null,'./assets/uploads/collections' )
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

adminRouter.get("/dashboardHome", async (req, res) => {
    try {
  res.render("admin/dashboardHome.twig")
    } catch (error) {
      res.send(error);
    }
  });

  adminRouter.post("/dashboardHome",upload.single('imageCollection'), async (req, res) => {
    try {
      await collectionController.setAddCollection(req,res)
      res.redirect("/dashboardHome")
      console.log("bob l'eponge");
    } catch (error) {
      res.send(error);
    }
  });


 
  //----------------------------------------------

  adminRouter.get("/dashboardUsers", async (req, res) => {
    try {
  res.render("admin/dashboardUsers.twig")
    } catch (error) {
      res.send(error);
    }
  });
 

  adminRouter.get("/dashboardCollections", async (req, res) => {
    try {
  res.render("admin/dashboardCollections.twig")
    } catch (error) {
      res.send(error);
    }
  });


  adminRouter.get("/dashboardOthers", async (req, res) => {
    try {
  res.render("admin/dashboardOthers.twig")
    } catch (error) {
      res.send(error);
    }
  });

  adminRouter.get("/dashboardUserAdd", async (req, res) => {
    try {
  res.render("admin/dashboardUserAdd.twig")
    } catch (error) {
      res.send(error);
    }
  });

  adminRouter.get("/dashboardCardAdd", async (req, res) => {
    try {
  res.render("admin/dashboardCardAdd.twig")
    } catch (error) {
      res.send(error);
    }
  });


export default adminRouter;
