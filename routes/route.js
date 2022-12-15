require("dotenv").config({
  path: "./config_files/.env",
});
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")

const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const mongoClient = mongodb.MongoClient;

function getUser(userId, callBack) {
  database.collection("users").findOne(
    {
      _id: ObjectId(userId),
    },
    function (error, result) {
      if (error) {
        return;
      }
      if (callBack !== null) {
        callBack(result);
      }
    }
  );
}

const db = process.env.MONGO_URI;

mongoClient.connect(db, { useUnifiedTopology: true }, function (error, client) {
  if (error) {
    console.log(error);
    return;
  }
  database = client.db("creditunion");

  router.get("/", (req, res) => {
    if (req.session.user_id) {
      getUser(req.session.user_id, function (user) {
        res.json({
          "isLogin": true,
          "query": req.query,
          "user": user,
        });
      });
    } else {
      res.json({
        "isLogin": false,
        "query": req.query,
      });
    }
  });

  router.post("/register", (req, res) => {

    console.log(req.body)
    database.collection("users").findOne(
      {
        userID: req.body.userID,
      },
      (err, user) => {
        if (user === null) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            database.collection("users").insertOne(
              {
                userID: req.body.userID,
                password: req.body.password,
                name: req.body.name,
                cardNumber: req.body.cardNumber,
                card: req.body.card
              },
              (err, data) => {
                console.log(err);
                res.redirect("/api/dashboard?message=registered");
              }
            );
          });
        } else {
          res.redirect("/api/register?error=exists");
        }
      }
    );
  });

  router.post("/login", (req, res) => {
    const userID = req.body.userID
    const password = req.body.password
    database.collection("users").findOne(
      {
        userID: userID,
      },
      (err, user) => {
        if (user === null) {
          res.redirect("/api/login?error=not_exists");
        } else {
          bcrypt.compare(
            password,
            user.password,
            (err, isPasswordVerify) => {
              if (isPasswordVerify) {
                req.session.user_id = user._id;
                res.redirect("/api/dashboard");
              } else {
                res.redirect("/api/login?error=wrong_password");
              }
            }
          );
        }
      }
    );
  });
});

module.exports = router;