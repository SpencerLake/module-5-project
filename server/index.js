const express = require("express");
const cors = require("cors");

const app = express();

let tips = [];


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

let fortunes = [
  "You will experience some type of joy today.",
  "As you go through the day you will relaize you are breathing.",
  "You have two legs, even if you lost one, you still have two.",
  "Reading this fortune has brought good fortune in search of fortunes",
  "You will someday die, live today"
];



app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

//adding fortune
app.post("/api/fortune", (req,res) => {
  console.log(req.body)
  let fortune = req.body.fortune
  fortunes.push(fortune)
  res.status(200).send(fortune)
});

// seeing fortunes
app.get("/api/fortune", (req,res) => {
  let random = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[random];
  console.log(fortunes)
  res.status(200).send(randomFortune)
});

// adding tips to achieve goals
app.post("/api/goalsHelp", (req,res) => {
  console.log(req.body)
  let tip = req.body.tip
  tips.push(tip)
  res.status(200).send(tips)
  console.log(tips)
});

app.get("/api/tips", (req,res) => {
  res.status(200).send(tips)
});

app.listen(4000, () => console.log("Server running on 4000"));
