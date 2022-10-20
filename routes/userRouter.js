import { Router } from "express";
import userModel from "../models/userModel.js";
import collectionModel from "../models/collectionModel.js";
import cardModel from "../models/cardModel.js";
import cardController from "../controllers/cardController.js";

const userRouter = Router();

//achat card

userRouter.get("/buyCard/:cardId", async (req, res) => {
  try {
    console.log(req.session.user);
    await userModel.updateOne(
      { _id: req.session.user },
      { $push: { cards: req.params.cardId } }
    );
    res.redirect("/shopCollections");
  } catch (error) {
    res.send(error);
  }
});

/*
listRouter.post('/AddList', async (req, res) => {
  try {
      req.body.User = await req.session.user
      let List = new ListModel(req.body)
      await List.save()
      await userModel.updateOne({_id: req.session.user},{ $push: { lists:List._id } })
      res.redirect('/home')
  } catch (error) {
      console.log(error);
      res.json(error)
  }
})
*/

// Route Card by Collection -------------------

userRouter.get("/getCards/:id", async (req, res) => {
  try {
    let collection = await collectionModel
      .findOne({ _id: req.params.id })
      .populate("cards");
    let cards = collection.cards;
    res.render("pages/cardOfCollection.twig", {
      collection: collection,
      cards: cards,
    });
  } catch (error) {
    res.send(error);
  }
});

// Route changepassword \\

userRouter.get("/changePassword", async (req, res) => {
  try {
    res.render("pages/changePassword.twig");
  } catch (error) {
    res.send(error);
  }
});

// Route shopcollections \\////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// shoptest

userRouter.get("/shopCollections", async (req, res) => {
  try {
    let collection = await collectionModel.find(req.body);
    let userConnect = await userModel.findOne({ _id: req.session.user });
    res.render("pages/userShop.twig", {
      collection: collection,
      userConnect: userConnect
    });
  } catch (error) {
    res.send(error);
  }
});

//*******profil */

userRouter.get("/profil/:id", async (req, res) => {
  try {
    let userConnect = await userModel.findOne({ _id: req.session.user });
    res.render("pages/useUp.twig", {
      userConnect: userConnect,
    });
  } catch (error) {
    res.send(error);
  }
});

userRouter.post("/profil/:id", async (req, res) => {
  try {
    await userModel.updateOne({ _id: req.session.user }, req.body);
    res.redirect("/userOverview");
  } catch (error) {
    res.send(error);
  }
});

// Route shopcards \\

userRouter.get("/shopCards", async (req, res) => {
  try {
    let card = await cardModel.find(req.body);
    res.render("pages/shopCards.twig", {
      card: card,
    });
  } catch (error) {
    res.send(error);
  }
});

// Route shopcommunity \\

userRouter.get("/shopCommunity", async (req, res) => {
  try {
    //let cardCom = await cardComModel.find(req.body);
    res.render(
      "pages/shopCommunity.twig" /*, {
    cardCom: cardCom,
  }*/
    );
  } catch (error) {
    res.send(error);
  }
});

// Route useroverview \\/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// usertest

userRouter.get("/userOverview", async (req, res) => {
  try {
    let userCo = await userModel
      .findOne({ _id: req.session.user })
      .populate("cards");
    let cards = userCo.cards;
    let userConnect = await userModel.findOne({ _id: req.session.user });
    res.render("pages/userView.twig", {
      userConnect: userConnect,
      cards: cards,
    });


  } catch (error) {
    res.send(error);
  }
});

// Route usercollection \\

userRouter.get("/userCollection", async (req, res) => {
  try {
    res.render("pages/userCollection.twig");
  } catch (error) {
    res.send(error);
  }
});

// Route usersell \\

userRouter.get("/userSell", async (req, res) => {
  try {
    res.render("pages/userSell.twig");
  } catch (error) {
    res.send(error);
  }
});

// Route wallet \\

userRouter.get("/wallet", async (req, res) => {
  try {
    res.render("pages/wallet.twig");
  } catch (error) {
    res.send(error);
  }
});

// Route usermodification \\

userRouter.get("/userModification", async (req, res) => {
  try {
    res.render("pages/userModification.twig");
  } catch (error) {
    res.send(error);
  }
});

// Route settings \\

userRouter.get("/settings", async (req, res) => {
  try {
    res.render("pages/settings.twig");
  } catch (error) {
    res.send(error);
  }
});

export default userRouter;
