import { Router } from "express";


const adminRouter = Router();

adminRouter.get("/dashboardHome", async (req, res) => {
    try {
  res.render("admin/dashboardHome.twig")
    } catch (error) {
      res.send(error);
    }
  });

  adminRouter.get("/dashboardUser", async (req, res) => {
    try {
  res.render("admin/dashboardUser.twig")
    } catch (error) {
      res.send(error);
    }
  });

  adminRouter.get("/dashboardCollection", async (req, res) => {
    try {
  res.render("admin/dashboardCollection.twig")
    } catch (error) {
      res.send(error);
    }
  });

  adminRouter.get("/dashboardOther", async (req, res) => {
    try {
  res.render("admin/dashboardOther.twig")
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

  adminRouter.get("/dashboardCollectionAdd", async (req, res) => {
    try {
  res.render("admin/dashboardCollectionAdd.twig")
    } catch (error) {
      res.send(error);
    }
  });


export default adminRouter;
