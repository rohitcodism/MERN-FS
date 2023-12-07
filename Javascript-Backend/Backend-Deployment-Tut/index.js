const express = require("express");
require("dotenv").config();

console.log(process.env)

const githubData = {
    "login": "rohitcodism",
    "id": 111235103,
    "node_id": "U_kgDOBqFQHw",
    "avatar_url": "https://avatars.githubusercontent.com/u/111235103?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rohitcodism",
    "html_url": "https://github.com/rohitcodism",
    "followers_url": "https://api.github.com/users/rohitcodism/followers",
    "following_url": "https://api.github.com/users/rohitcodism/following{/other_user}",
    "gists_url": "https://api.github.com/users/rohitcodism/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rohitcodism/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rohitcodism/subscriptions",
    "organizations_url": "https://api.github.com/users/rohitcodism/orgs",
    "repos_url": "https://api.github.com/users/rohitcodism/repos",
    "events_url": "https://api.github.com/users/rohitcodism/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rohitcodism/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Rohit Paul",
    "company": "Student",
    "blog": "rohit-paul.vercel.app",
    "location": "Habra",
    "email": null,
    "hireable": true,
    "bio": "Just trying to beat myself everyday.",
    "twitter_username": "RohitPaul125",
    "public_repos": 53,
    "public_gists": 0,
    "followers": 7,
    "following": 12,
    "created_at": "2022-08-14T14:16:38Z",
    "updated_at": "2023-12-04T03:49:32Z"
}


const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/dashboard", (req, res) => {
    res.send("Welcome to the dashboard.")
})

app.get("/dashboard/login", (req, res) => {
    res.send("Please log in with your mail id.");
})

app.get("/dashboard/teams", (req, res) => {
    res.json(githubData)
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})