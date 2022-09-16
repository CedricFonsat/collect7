import { Router } from "express";


const adminRouter = Router();

adminRouter.get("/dashboardHome", async (req, res) => {
    try {
  res.render("admin/dashboardHome.twig")
    } catch (error) {
      res.send(error);
    }
  });

  adminRouter.get("/dashboardUsers", async (req, res) => {
    try {
  res.render("admin/dashboardUsers.twig")
    } catch (error) {
      res.send(error);
    }
  });

  adminRouter.get("/dashboardCollections", async (req, res) => {
    try {
  res.render("admin/dashboardCollections.twig")
    } catch (error) {
      res.send(error);
    }
  });

  adminRouter.get("/dashboardOthers", async (req, res) => {
    try {
  res.render("admin/dashboardOthers.twig")
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
