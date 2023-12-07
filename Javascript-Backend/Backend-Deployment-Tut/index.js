const express = require("express");
require("dotenv").config();

console.log(process.env)


const app = express();
const port  = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/dashboard", (req,res) => {
    res.send("Welcome to the dashboard.")
})

app.get("/dashboard/login", (req,res) => {
    res.send("Please log in with your mail id.");
})

app.get("/dashboard/teams", (req,res) => {
    res.send("Here are your teams.");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})