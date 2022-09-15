import { Router } from "express";

const visitorRouter = Router();

// Route home \\

visitorRouter.get("/", async (req, res) => {
  try {
    res.render("home.twig");
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

// Route connection emporaire \\

visitorRouter.get("/connection", async (req, res) => {
  try {
    res.render("pages/connection.twig");
  } catch (error) {
    res.send(error);
  }
});

// Route usermanuel \\

visitorRouter.get("/userManual", async (req, res) => {
  try {
res.render("pages/userManual.twig")
  } catch (error) {
    res.send(error);
  }
});

// Route contact \\

visitorRouter.get("/contact", async (req, res) => {
  try {
res.render("pages/contact.twig")
  } catch (error) {
    res.send(error);
  }
});





export default visitorRouter;
