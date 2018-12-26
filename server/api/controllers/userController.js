const bcrypt = require("bcryptjs");
const uuid = require("uuid/v4");

const getUser = (req, res) => {};

const getLoggedInUserInfo = (req, res) => {
  req.app
    .get("db")
    .users.users_getloggedin(req.user.userid)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => res.status(500).json(err));
};

const registerNewUser = async (req, res) => {
  console.log(req.body);
  let { firstName, lastName, email, hashpass } = req.body;
  // lowercase their email
  email = email.toLowerCase();
  // hash their password again
  const passToDB = await bcrypt.hash(hashpass, 10);

  const newUserId = uuid();
  //send to db
  const db = req.app.get("db");

  db.users
    .register(newUserId, firstName, lastName, email, passToDB)
    .then(response => {
      console.log(response);
      const token = jwt.sign(
        { userId: response.user_id },
        process.env.APP_SECRET
      );
      response.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 5 // 5 hours
      });
    })
    .catch(err => console.log(err));
};

module.exports = {
  getUser,
  getLoggedInUserInfo,
  registerNewUser
};
