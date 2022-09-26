import { Router } from "express";
import userModel from "../models/userModel.js";
import collectionModel from "../models/collectionModel.js";
import cardModel from "../models/cardModel.js";

const userRouter = Router();

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
  res.render("pages/shopCommunity.twig")
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
