import { Router } from "express";
import collectionController from "../controllers/collectionController.js";
import collectionModel from "../models/collectionModel.js";
import userModel from "../models/userModel.js"
import overviewController from "../controllers/overviewController.js";
import cardController from "../controllers/cardController.js"
import {uploadMultipleOverview, uploadCard, uploadCollections} from "../dependencies/multer.js"
import cardModel from "../models/cardModel.js";

const adminRouter = Router();

adminRouter.get("/dashboard", async (req, res) => {
  try {
    res.render("admin/dashboard.twig");
  } catch (error) {
    res.send(error);
  }
});

//---------------------------------------------- Dashboard Home

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

//---------------------------------------------- Overviews

adminRouter.get("/dashboardOverview", async (req, res) => {
  try {
    res.render("admin/layer/dashboardOthers.twig")
  } catch (error) {
    res.send(error);
  }
}
);

adminRouter.post("/dashboardOverview", uploadMultipleOverview, async (req, res) => {
  try {
    await overviewController.setAddOverview(req);
    res.redirect("dashboardOverview");
    console.log("cvsjhcvqksvqqflsdljajadyueuyufzeuyj");
  } catch (error) {
    res.send(error);
  }
}
);

//---------------------------------------------- Users

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

adminRouter.get("/dashboardUserAdd", async (req, res) => {
  try {
    res.render("admin/layer/dashboardUserAdd.twig");
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

//---------------------------------------------- Collections

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

adminRouter.get("/dashboardCollectionAdd", async (req, res) => {
  try {
    res.render("admin/layer/dashboardCollectionAdd.twig")
  } catch (error) {
    res.send(error);
  }
}
);

adminRouter.post("/dashboardCollectionAdd", uploadCollections.single('imageCollection')
,async (req, res) => {
    try {
      await collectionController.setAddCollection(req, res);
      res.redirect("/dashboardCollections");
      console.log("bob l'eponge");
    } catch (error) {
      res.send(error);
    }
  }
);

adminRouter.get("/dashboardCollections/:id", async (req, res) => {
  try {
    await collectionModel.deleteOne({ _id: req.params.id });
    res.redirect("/dashboardCollections");
  } catch (error) {
    res.send(error);
  }
});

adminRouter.get("/dashboardCollectionsUpdate/:id", async (req, res) => {
  try {
    let collections =  await collectionModel.findOne({ _id: req.params.id }, req.body);
    res.render("admin/layer/dashboardCollectionUpdate.twig",{
      collections: collections
    })
  } catch (error) {
    res.send(error);
  }
});

adminRouter.post("/dashboardCollectionsUpdate/:id",uploadCollections.single('imageCollection'), async (req, res) => {
  try {
    if (req.file) {
      req.body.imageCollection = req.file.filename;
    }
    await collectionModel.updateOne({ _id: req.params.id }, req.body);
    res.redirect('/dashboardCollections')
  } catch (error) {
    res.send(error);
  }
});

//---------------------------------------------- Others

adminRouter.get("/dashboardOthers", async (req, res) => {
  try {
    res.render("admin/layer/dashboardOthers.twig");
  } catch (error) {
    res.send(error);
  }
});

//---------------------------------------------- Cards

adminRouter.get("/dashboardCards", async (req, res) => {
  try {
    let cards = await cardModel.find(req.body);
    res.render("admin/layer/dashboardCards.twig",{
      cards: cards
    })
  } catch (error) {
    res.send(error);
  }
});

adminRouter.get("/dashboardCard/:id", async (req, res) => {
  try {
    await cardModel.deleteOne({ _id: req.params.id });
    res.redirect("/dashboardCards");
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

adminRouter.get("/dashboardCardUpdate/:id", async (req, res) => {
  try {
    let cards =  await cardModel.findOne({ _id: req.params.id }, req.body);
    res.render("admin/layer/dashboardCardUpdate.twig",{
      cards: cards
    })
  } catch (error) {
    res.send(error);
  }
});

adminRouter.post("/dashboardCardUpdate/:id",uploadCard.single('imageCard'), async (req, res) => {
  try {
    if (req.file) {
      req.body.imageCard = req.file.filename;
    }
    await cardModel.updateOne({ _id: req.params.id }, req.body);
    res.redirect('/dashboardHome')
  } catch (error) {
    res.send(error);
  }
});

export default adminRouter;
