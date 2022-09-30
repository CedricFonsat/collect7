import { Router } from "express";
import userModel from "../models/userModel.js";
import collectionModel from "../models/collectionModel.js";
import cardModel from "../models/cardModel.js";

const userRouter = Router();

// Route Card by Collection -------------------

userRouter.get("/getCards/:id", async (req, res) => {
  try {
    let collection = await collectionModel.findOne({ _id: req.params.id }).populate('cards');
    console.log(collection);
    let cards = collection.cards
    console.log(collection);
    console.log("ggggg");
res.render("pages/cardOfCollection.twig",{
  collection: collection,
  cards: cards
})
console.log("ggggr");
  } catch (error) {
    res.send(error);
  }
});

// Route changepassword \\

userRouter.get("/changePassword", async (req, res) => {
    try {
  res.render("pages/changePassword.twig")
    } catch (error) {
      res.send(error);
    }
  });

  // Route shopcollections \\
  
  userRouter.get("/shopCollections", async (req, res) => {
    try {
      let collection = await collectionModel.find(req.body);
  res.render("pages/shopCollections.twig", {
    collection: collection,
  });
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
  })
    } catch (error) {
      res.send(error);
    }
  });

  // Route shopcommunity \\
  
  userRouter.get("/shopCommunity", async (req, res) => {
    try {
      //let cardCom = await cardComModel.find(req.body);
  res.render("pages/shopCommunity.twig"/*, {
    cardCom: cardCom,
  }*/)
    } catch (error) {
      res.send(error);
    }
  });

  // Route useroverview \\
  
  userRouter.get("/userOverview", async (req, res) => {
    try {
      let userConnect = await userModel.findOne({ _id: req.session.user });
      if (userConnect) {
        userConnect = userConnect.userName;
      }
        res.render("pages/userOverview.twig", {
          userConnect: userConnect,
        });
    } catch (error) {
      res.send(error);
    }
  });

  // Route usercollection \\
  
  userRouter.get("/userCollection", async (req, res) => {
    try {
  res.render("pages/userCollection.twig")
    } catch (error) {
      res.send(error);
    }
  });

  // Route usersell \\

  userRouter.get("/userSell", async (req, res) => {
    try {
  res.render("pages/userSell.twig")
    } catch (error) {
      res.send(error);
    }
  });

  // Route wallet \\

  userRouter.get("/wallet", async (req, res) => {
    try {
  res.render("pages/wallet.twig")
    } catch (error) {
      res.send(error);
    }
  });

  // Route usermodification \\ 

  userRouter.get("/userModification", async (req, res) => {
    try {
  res.render("pages/userModification.twig")
    } catch (error) {
      res.send(error);
    }
  });

   // Route settings \\ 

  userRouter.get("/settings", async (req, res) => {
    try {
  res.render("pages/settings.twig")
    } catch (error) {
      res.send(error);
    }
  });



  



  


export default userRouter;