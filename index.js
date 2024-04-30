const express = require("express");
const app = express();

app.get("/", (req, res) => 
res.send("Hello Bum!"));

app.get("/users", (req, res) => 
res.send("Daftar Users"));

app.listen(3000, () => console.log("Server ready"));