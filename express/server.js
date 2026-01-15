import express from 'express';

const app = express();//new express application
const port = 3000;

const router = express.Router();

app.get('/api/v1/cars', (req, res) => {
    res.send('all cars');
})

//after using router

router.get('/', (req, res) => {
    res.send('All cars');
})

app.get('/', (req, res) => {
    res.end('server is running');
})

app.use('/api/v1', router);//defining router

app.listen(port, () => console.log(`server is running at http://localhost:${port}`));