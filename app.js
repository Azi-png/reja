console.log("Web Serverni boshlash");
const express = require("express"); // modulni chaqirib olamiz
const res = require("express/lib/response");
const app = express(); // express funksiyasidan yangi app object yasaymiz. chunki express moduli ichida get post , listen methodlari yoq, lekin static degan yordamchi funksiyasi bor

//MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

// 1 kirish code
app.use(express.static("public")); // bowserdan kelayotgan soroqlar uchun public ichidagi static fayllarni ochib beryapmiz, express.static("public") qilib ishlata olmaymiz, chunki bunda mantiq yoq, static shunchaki yordamchi funksiya, uni use methodi ichida ishlatsakgina ishlaydi
app.use(express.json()); //
app.use(express.urlencoded({ extended: true }));
// 2 Session
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");
// 4 Routing code
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      if (err) {
        return res.status(500).json({ state: "error", message: err.message });
      }
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar o'chirildi" });
    });
  }
});

app.get("/", function (req, res) {
  // "/" bu asosiy sahifa manzili bb, shu mazilga get sorovi yuborilganda ichidagi funksiya ishga tushadi , req res degani mijozni sorovi va oshpazni unga responsi degani
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
