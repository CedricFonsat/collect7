import { Router } from "express";
import multer from "multer";
import collectionController from "../controllers/collectionController.js";
import collectionModel from "../models/collectionModel.js";
import userModel from "../models/userModel.js"
import overviewController from "../controllers/overviewController.js";
import cardController from "../controllers/cardController.js"

const adminRouter = Router();

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./assets/uploads/collections");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});

const storageCard = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./assets/uploads/cards");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});
const uploadCard = multer({
  storage: storageCard,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});


/***hjcddjdddd */

const storaget = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets/uploads/overviews/background");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
 
const uploadt = multer({ storage: storaget });
 
const uploadMultiple = uploadt.fields([{ name: 'backgroundImageOverview', maxCount: 10 }, { name: 'imageOverview', maxCount: 10 }])
 
/********** */



adminRouter.get("/dashboardHome", async (req, res) => {
  try {
    let collection = await collectionModel.find(req.body);
    let users = await userModel.find(req.body);
    let usersCount = await userModel.find(req.body).count();
    let collectionCount = await collectionModel.find(req.body).count();
    res.render("admin/dashboardHome.twig", {
      collection: collection,
      users: users,
      usersCount: usersCount,
      collectionCount: collectionCount,

    });
  } catch (error) {
    res.send(error);
  }
});



adminRouter.post("/dashboardHome", upload.single('imageCollection')
,async (req, res) => {
    try {
      await collectionController.setAddCollection(req, res);
      res.redirect("/dashboardHome");
      console.log("bob l'eponge");
    } catch (error) {
      res.send(error);
    }
  }
);

adminRouter.get("/dashboardCollectionAdd", async (req, res) => {
  try {
    res.render("admin/layer/dashboardCollectionAdd.twig")
  } catch (error) {
    res.send(error);
  }
}
);


//-----------------------------

adminRouter.get("/dashboardOverview", async (req, res) => {
  try {
    res.render("admin/layer/dashboardOthers.twig")
  } catch (error) {
    res.send(error);
  }
}
);

adminRouter.post("/dashboardOverview", uploadMultiple, async (req, res) => {
  try {
    await overviewController.setAddOverview(req);
    res.redirect("dashboardOverview");
    console.log("cvsjhcvqksvqqflsdljajadyueuyufzeuyj");
  } catch (error) {
    res.send(error);
  }
}
);

//----------------------------------------------

adminRouter.get("/dashboardUsers", async (req, res) => {
  try {
    let users = await userModel.find(req.body);
    res.render("admin/layer/dashboardUsers.twig",{
      users: users,
    });
  } catch (error) {
    res.send(error);
  }
});

adminRouter.get("/dashboardUsers/:id", async (req, res) => {
  try {
    await userModel.deleteOne({ _id: req.params.id });
    res.redirect("/dashboardUsers");
  } catch (error) {
    res.send(error);
  }
});

adminRouter.get("/dashboardCollections", async (req, res) => {
  try {
    let collections = await collectionModel.find(req.body);
    res.render("admin/layer/dashboardCollections.twig",{
      collections: collections
    })
  } catch (error) {
    res.send(error);
  }
});

adminRouter.get("/dashboardCollections/:id", async (req, res) => {
  try {
    await collectionModel.deleteOne({ _id: req.params.id });
    res.redirect("/dashboardCollections");
  } catch (error) {
    res.send(error);
  }
});

adminRouter.get("/dashboardOthers", async (req, res) => {
  try {
    res.render("admin/layer/dashboardOthers.twig");
  } catch (error) {
    res.send(error);
  }
});

adminRouter.get("/dashboardUserAdd", async (req, res) => {
  try {
    res.render("admin/layer/dashboardUserAdd.twig");
  } catch (error) {
    res.send(error);
  }
});



adminRouter.get("/dashboardCardAdd", async (req, res) => {
  try {
    res.render("admin/layer/dashboardCardAdd.twig");
  } catch (error) {
    res.send(error);
  }
});

adminRouter.post("/dashboardCardAdd",uploadCard.single('imageCard'), async (req, res) => {
  try {
    await cardController.setAddCard(req, res);
    res.redirect("/dashboardHome");
    console.log("card successful");
  } catch (error) {
    res.send(error);
  }
});

export default adminRouter;
