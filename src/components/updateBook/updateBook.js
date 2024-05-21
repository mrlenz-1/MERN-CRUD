import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect} from "react";
import { Form,Button } from "react-bootstrap";
import "./updateBook.css";


const UpdateBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        author: "",
        genre: "",
    });

    useEffect(() => {
        const fetchBook = async () =>{
            try {
                const response = await fetch(`http://localhost:5000/api/books/${id}`);
                const data = await response.json();
                FormData(data);
            } catch (error) {
                console.error("error while fetching users:", error.message);
            }
        }
        fetchBook();
    }, [id]);

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
        const response = await fetch(`http://localhost:5000/api/books/${id}`, {
            method: "PATCH",
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
        <>
         <div className="centre-form">
            <h1>Update  Book</h1>
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
                    Update
                </Button>
            </Form>
        </div>
    </>
    );
};

export default UpdateBook;