const express = require("express");
const { sortPlayer } = require("./sorting");
const { assignWand } = require("./wand");
const { castSpell } = require("./spells");

const app = express();

app.get("/sort", (req, res) => res.send(sortPlayer(["Gryffindor", "Ravenclaw"])));
app.get("/wand", (req, res) => res.send(assignWand()));
app.get("/spell/:name", (req, res) => res.send(castSpell(req.params.name)));

app.listen(3000, () => console.log("🚀 Hogwarts RPG is running!"));
