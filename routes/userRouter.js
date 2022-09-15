import { Router } from "express";


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
  res.render("pages/shopCollections.twig")
    } catch (error) {
      res.send(error);
    }
  });

  // Route shopcards \\
  
  userRouter.get("/shopCards", async (req, res) => {
    try {
  res.render("pages/shopCards.twig")
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
  res.render("pages/userOverview.twig")
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
