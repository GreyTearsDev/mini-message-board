const express = require("express");
const router = express.Router();
const dbQuery = require("../db/queries");

router.get("/", async function (req, res, next) {
  const messages = await dbQuery.allMessagesGet();

  res.render("index", { title: "Mini Message Board", messages: messages.rows });
});

router.post("/new", async function (req, res, next) {
  const formContent = req.body;
  const addedDate = new Date(); // date and time of added message

  try {
    await dbQuery.addMessagePost(
      formContent.userName,
      formContent.messageText,
      addedDate,
    );
  } catch (e) {
    console.log(e);
  }
  res.redirect("/");
});

module.exports = router;
