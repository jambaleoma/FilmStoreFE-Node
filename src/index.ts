let express = require("express");

let app = express();

app.use(express.static('film-store-fe'));

app.listen(2121, () => {
    console.log(`Example app listening on port 2121`)
})