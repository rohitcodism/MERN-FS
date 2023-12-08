import express from "express";

const app = express();

const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//     res.send("Hello Express Here");
// });

const Jokes = [
    {
        id: 1,
        title: "Joke 1",
        body: "This is joke 1"
    },
    {
        id: 2,
        title: "Joke 2",
        body: "This is joke 2"
    },
    {
        id: 3,
        title: "Joke 3",
        body: "This is joke 3"
    },
    {
        id: 4,
        title: "Joke 4",
        body: "This is joke 4"
    },
    {
        id: 5,
        title: "Joke 5",
        body: "This is joke 5"
    },
]


app.get('/api/jokes', (req,res) => {
    res.send(Jokes);
})


app.listen(port, (req,res) => {
    console.log(`Server is running on ${port}`)
});