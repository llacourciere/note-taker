//calling express to this document
const express = require('express');

const app = express();
//creating the port
const PORT = process.env.PORT || 3001;
//adding middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//adding files for the server to use
app.use(require("./routes"));
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}`);
});