import { Router } from "express";


const visitorRouter = Router();

visitorRouter.get("/", async (req, res) => {
    try {
  res.render("index.twig")
    } catch (error) {
      res.send(error);
    }
  });


export default visitorRouter;
