const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json())

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'n3wpassw0rd',
    database: 'LibraryDB'
});

app.post('/create', (req, res)=>{
    console.log(req.body)
    const title = req.body.title
    const writer = req.body.writer
    const description = req.body.description

    database.query('INSERT INTO Books (title, writer, description) VALUES (?,?,?)',[title,writer,description],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values inserted");
        }
    });
});

app.get('/books',(req, res) => {
    database.query("SELECT * FROM Books",(err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

app.put('/update', (req, res)=>{
    console.log(req.body)
    const title = req.body.title
    const writer = req.body.writer
    const description = req.body.description
    const id = req.body.id

    database.query("UPDATE Books SET title=?, writer=?, description=? WHERE id=?;",[title,writer,description, id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values inserted");
        }
    });
});

app.delete('/delete/:id',(req, res) => {

    const id = req.params.id;

    database.query('DELETE FROM Books WHERE id=?',id,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values inserted");
        }
    });
})




database.connect((error)=>{
    if(error){
        console.log("There was an error " + error);
    }else{
        console.log("connected to a database");
    }
})

app.listen(5000,()=>{
    console.log("Hello server")
});
