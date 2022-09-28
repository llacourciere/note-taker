//connecting to express.router
const router = require("express").Router();
const fs = require('fs');
//connecting to the data that we are using for the api
const store = require('../db/db.json');
//connects to the node module to create a unique id for each note
const { v4: uuidv4 } = require('uuid');
const { writeFile } = require('fs');

//this is getting the data from db.json
router.get('/notes', (req,res)=> res.json(store));
//this enables the save button to work using the post method
router.post('/notes', ({body}, res)=> {
    body.id = uuidv4();

    store.push(body);
    writeFile('./db/db.json', JSON.stringify(store), (err)=>{
        if(err) throw err;
        res.json(store);
    })
});
//this deletes a note using its unique id
router.delete('/notes/:id', (req, res)=> {
    let db = JSON.parse(fs.readFileSync('./db/db.json'))
    let deleteNotes = db.filter(item => item.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);

});

module.exports = router;
