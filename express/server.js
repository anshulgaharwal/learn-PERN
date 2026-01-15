import express from 'express';

const app = express();//new express application
const port = 3000;

app.get('/', (req, res) => {
    res.end('server is running');
})

app.listen(port, () => console.log(`server is running at http://localhost:${port}`));