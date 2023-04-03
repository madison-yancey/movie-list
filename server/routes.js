import express from 'express';
import knex from 'knex';
import knexfile from './knexfile.js';
import cors from 'cors';

const environment = process.env.NODE_ENV || 'development';
const config = knexfile[environment];

const db = knex(config);
const routePath = express.Router();
routePath.use(cors());

routePath.get("/", (request, response) => {
    response.status(200).json("success");
});

routePath.get('/movies', (request, response) => {
    db
        .select('*')
        .from('movies')
        .then(data => response.status(200).json(data))
        .catch(err =>
            response.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again.'
            })
        );
})

routePath.post('/movies/add', async (request, response) => {
    let new_movie = request.body;
    await db
        .insert(new_movie)
        .into('movies')
        .then(function (result) {
            response.json({ success: true, message: 'New movie added.' });    // respond back to request
        })
        .catch(err =>
            response.json({
                message:
                    'The data you are looking for could not be found. Please try again.'
            })
        );
})

routePath.patch('/movies/:id', (request, response) => {

})

routePath.delete('/movies/delete/:id', (request, response) => {

})

routePath.all('/*', (req, res) => {
    res.status(405).send('Method not authorized.');
})

export default routePath;