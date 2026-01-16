import express from 'express';

const app = express();//new express application
const port = 3000;

const router = express.Router();

app.use(express.json());//pars json

let cars = [
    {id: 1, make: 'Ford', model: 'F-150', year: 2021, price: 35000},
    {id: 2, make: 'tesla', model: 'F-150', year: 2021, price: 35000},
    {id: 3, make: 'totota', model: 'F-150', year: 2021, price: 35000},
]

// app.get('/api/v1/cars', (req, res) => {
//     res.send('all cars');
// })

// //after using router

// router.get('/', (req, res) => {
//     res.send('All cars');
// })

// app.get('/', (req, res) => {
//     res.end('server is running');
// })

router.get('/', (req, res) => {
    res.json(cars);//returns json
})

//get by id

router.get('/:id', (req, res) => {
    let id = Number(req.params.id);
    const car = cars.find((car) => car.id === id);
    if(!car){
        return res.status(404).send('Car not found');
    }
    return res.json(car);
})

//post request, created new json data

router.post('/', (req, res) => {
    const {make, model, year, price} = req.body;

    if(!make || !model || !year || !price){
        return res.status(400).json({error: "Missing Fields"});
    }
    const newCar = {
        id: cars.length + 1,
        make, 
        model,
        year: Number(year),
        price: Number(price),
    }
    cars.push(newCar);
    res.status(201).json(newCar);
})

app.use('/api/v1/cars', router);//defining router

app.listen(port, () => console.log(`server is running at http://localhost:${port}`));

//req.params.id returns string by deafult