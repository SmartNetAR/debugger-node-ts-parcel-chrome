import express from 'express';
const app = express()
const port = 3001

app.get('/', (req, res) => {
    console.log("probando el debugger con TS");
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

