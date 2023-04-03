import React, { useEffect, useState } from 'react';
import { Col, Row } from "react-bootstrap";
//import { useNavigate, Link } from 'react-router-dom';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState({ title: "", genre: "", release_date: "" });

    useEffect(() => {
        fetch('http://localhost:3001/movies')
            .then(response => response.json())
            .then(data => {
                setMovies(data)
            })
    }, [])

    const addMovie = () => {
        fetch('http://localhost:3001/movies/add',
            {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({ title: "Mulan", genre: "animated", release_date: "1998-06-05", watched: false, to_watch: false })
            })
            .then(response => response.json())
            .then(data => {
                setMovies(data)
            })
    }

    return (
        <>
            <Row>
                <Col md='auto' id='Col1'>
                    <div>
                        <Row>
                            <Col>Title:</Col>
                            <Col><input></input></Col>
                        </Row>
                        <Row>
                            <Col>Genre:</Col>
                            <Col><input></input></Col>
                        </Row>
                        <Row>
                            <Col>Release Date:</Col>
                            <Col><input></input></Col>
                        </Row>
                        <button onClick={addMovie()}>Add new movie</button>
                    </div>
                </Col>
                <Col md='auto' id='Col2'>
                    {
                        movies.map((movie) =>
                            <div>
                                <li key={movie.title}>{movie.title}</li>
                                <button>Watched</button>
                                <button>Add to Wath List</button>
                                <button>Delete</button>
                            </div>
                        )
                    }
                </Col>
            </Row>
        </>
    )
}

export default Movies;