import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./postBook.css";
import { useNavigate } from "react-router-dom";

const PostBook = () => {
    const [formData, setFormData] = useState({
        name: "",
        author: "",
        genre: "",
    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       try{
        const response = await fetch("http://localhost:5000/api/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json(response);
        console.log(data);
        navigate("/");

    }catch (err) {
        console.error(err);
    }

    };

    return (
        <div className="centre-form">
            <h1>Add New Book</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter the name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        name="author"
                        placeholder="Enter the author"
                        value={formData.author}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formGenre">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control
                        type="text"
                        name="genre"
                        placeholder="Enter the genre"
                        value={formData.genre}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="dark" type="submit" className="w-100">
                    Add
                </Button>
            </Form>
        </div>
    );
};

export default PostBook;
