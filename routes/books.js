const express = require("express");
const router = express.Router();
const books = require("../controllers/books");


// GET /posts
router.get("/posts", books.index);  
//  GET /posts/:id
router.get("/posts/:id", books.show)
//  POST /posts
router.post("/posts", books.create); // add a new book
// PATCH /posts/:id
router.patch('/posts/:id', books.update);// update the title of an existing post by author
// DELETE /posts/:id
router.delete("/posts/:id", books.destroy);
module.exports=router;

/*
1 app
2 routes
3 controllers
4 models

*/