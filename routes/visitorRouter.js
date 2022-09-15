import { Router } from "express";

const visitorRouter = Router();

visitorRouter.get("/", async (req, res) => {
  try {
    res.render("index.twig");
  } catch (error) {
    res.send(error);
  }
});

// Route registration temporaire /!\

visitorRouter.get("/registration", async (req, res) => {
  try {
    res.render("pages/registration.twig");
  } catch (error) {
    res.send(error);
  }
});

// Route lostPassword temporaire /!\

visitorRouter.get("/lostPassword", async (req, res) => {
  try {
    res.render("pages/lostPassword.twig");
  } catch (err) {
    res.send(err);
  }
});

visitorRouter.get("/connection", async (req, res) => {
  try {
    res.render("pages/connection.twig");
  } catch (error) {
    res.send(error);
  }
});

visitorRouter.get("/lalala", async (req, res) => {
  try {
    res.render("fadaaaaaa");
  } catch (error) {
    res.send(error);
  }
});

export default visitorRouter;
