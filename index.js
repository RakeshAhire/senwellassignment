
const express = require('express');
const { connection } = require('./connection/db');
const { employeeRouter } = require('./routes/employeeRoutes');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ok")
})

app.use("/employee", employeeRouter)


app.listen(8080, async (req, res) => {
    try {
        await connection;
        console.log("App listning 8080")
    } catch (error) {
        console.log('error: ', error);
    }
})