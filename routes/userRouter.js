import { Router } from "express";


const userRouter = Router();

userRouter.get("/acceuil", async (req, res) => {
    try {
  res.render("pages/")
    } catch (error) {
      res.send(error);
    }
  });


export default userRouter;
