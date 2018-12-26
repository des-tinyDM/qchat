const express = require("express");
const router = express.Router();

const {
  getUser,
  getLoggedInUserInfo,
  registerNewUser
} = require(`${__dirname}/../controllers/userController`);

router.post("/register", registerNewUser);
router.get("/get", () => {
  console.log("users");
});
router.get("/profile", getLoggedInUserInfo);

module.exports = router;
