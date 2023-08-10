const db = require("../db");

class Book {
    constructor(book) {
        this.isbn = book.isbn;
        this.title = book.title;
        this.author = book.author;
        this.about = book.year_published;
    }
    static async showAll() {
        const data = await db.query("SELECT * FROM books");
        return data.rows;
    }
    static async show(idx) {
        const data = await db.query(`SELECT * FROM books WHERE isbn = ${idx}`)
        return data.rows;
    }
    static async create(book) {
        await db.query("INSERT INTO books (isbn, title, author, about) VALUES ($1, $2, $3, $4, $5)", [book.isbn, book.title, book.author, book.year_published])
    }
}
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
module.exports=Book ;