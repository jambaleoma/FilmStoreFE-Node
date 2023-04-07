import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

let app = express();

app.use('/', express.static('film-store-fe'));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})