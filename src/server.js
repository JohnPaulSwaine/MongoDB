require("dotenv").config()
import ("./db/connection.js")
const Book = require("./db/models/bookmodel.js")

const express = require ("express")
const app = express()

app.use(express.json())

app.post("/books/add", async (req, res) => {

    const result = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    })

    res.send(req.body)

    console.log(result)
    
    const responseMessage = {
        message: `Book ${req.body.title} has been added.`,
        dbresponse: result
    }

    res.status(201).send(responseMessage)

})



app.listen(5001, () => {console.log("server is listening on port 5001.")})