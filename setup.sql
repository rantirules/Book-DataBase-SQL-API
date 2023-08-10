DROP TABLE IF EXISTS books;

CREATE TABLE books (
    isbn INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    about VARCHAR(250) DEFAULT 'no description',
    year_published INT,
    PRIMARY KEY (isbn)
);

INSERT INTO books (isbn, title, author, about, year_published)
VALUES (101, 'Crime and Punishment', 'FD', 'guilt and murder', 1890),
(102, 'Pride and Prejudice', 'Jane Austen', 'love and freedom', 1813),
(103,'To Kill a Mockingbird','Harper Lee','racial justice', 1960),
(445, 'War horse', 'Michael Morpurgo', 'war', 1982),
(777, 'The Butterfly Lion', 'Michael Morpurgo','coming of age', 1996);

