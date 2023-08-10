const Book = require("../models/Book")


 /*
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
 */
async function index(req, res) {
    try {
       //  const posts = await Book.find({})
       const book = await Book.showAll();
       res.send(book);
    } catch(err) {
        res.status(500).send({error: "Server error"});
    }
};

async function show(req, res) {
    const idx = parseInt(req.params.id);
    try {
        const quote = await Book.show(idx);
        res.send(quote);
    } catch (err) {
        res.status(404).send({error: "Book not found"})
    }
};

async function create(req, res) {
    console.log(req.body);
    try {
        const newBook = await Book.create(req.body);
        res.status(201).send(newBook);
    } catch (err) {
        res.status(500).send({error: "Can't create a book"});
    }
};

async function update(req, res) {
    const idx = parseInt(req.params.id);
    try {
        const book = await Book.show(idx)
        const result = await book.update(req.body);
        res.status(200).json(result)
    } catch (err) {
        res.status(404).send({error: "Book not found"});
    }
};

async function destroy(req, res) {
    const idx = parseInt(req.params.id);
    try {
        const book = await Book.show(idx);
        const result = await book.destroy();
        res.status(204).send(result);
    } catch (err) {
        res.status(404).send({error: "Book not found"});
    }
};

module.exports = {index, show, create, update, destroy}