import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/books");
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
      } else {
        console.error("Error fetching books:", response.status);
      }
    } catch (error) {
      console.error("Error fetching books:", error.message);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleUpdate = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/books/${bookId}`, {
        method:"DELETE"
      });
      if (response.ok) {
        fetchBooks();
      } else {
        console.error("Error deleting book:", response.status);
      }
    } catch (error) {
      console.error("Error deleting book:", error.message);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Library</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book._id}>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>
                    <Button variant="dark" onClick={() => handleUpdate(book._id)}>
                      Update
                    </Button>{" "}
                    <Button variant="danger" onClick={() => handleDelete(book._id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Library;
