const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(require("./routes"));
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}`);
});