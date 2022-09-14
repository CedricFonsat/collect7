import { Router } from "express";


const adminRouter = Router();

adminRouter.get("/admin", async (req, res) => {
    try {
  res.render("admin/dashboard.twig")
    } catch (error) {
      res.send(error);
    }
  });


export default adminRouter;
