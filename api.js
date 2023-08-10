const express = require("express");
const cors = require("cors")
// const db = require("./db")
const books = require('./routes/books');

const api = express();
api.use(express.json())
api.use(cors());
api.use('/', books);
// api.get("/", (req, res) => res.send("The Books API"));
// api.get("/posts", async(req, res) => {
//     const data = await db.query("SELECT * FROM books");
//     // console.log(`Hello`)
//     res.send(data);
// })

/*
GET /posts
GET /posts/:id
POST /posts
PATCH /posts/:id
DELETE /posts/:id
*/

// api.get("/people/:id", async(req, res) => {
//     try {
//         const id = parseInt(req.params.id);
//         const data = await db.query("SELECT * FROM person WHERE person_id = $1", [id])
//     } catch {
//         res.status(404).send("invalid ID")
//     }
   
// })

// api.get("/posts", async(req, res) => {
//     try {

//     }
// })
    
module.exports = api;