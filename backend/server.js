
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: [
        'http://localhost:5000'
    ]
}));
const PORT = 5000;
const CITIES = [
    {
        id: 1,
        city: "Oslo",
        country: "Norway"
    },
    {
        id: 2,
        city: "Paris",
        country: "France"
    },
    {
        id: 3,
        city: "Berlin",
        country: "Germany"
    },
]
app.use((req, res, next) => {
    console.log('Time: ' + Date.now())
    res.header("Access-Control-Allow-Origin","*")
    next();
})
app.get('/', (req,res) => {
    res.send('Hello Backend');
});
app.get('/api/', (req,res) =>{
    res.json({message:'Hello API'});
});
app.get('/api/cities/', (req,res) => {
    res.send(CITIES);
});
app.get('/api/cities/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const city = CITIES.find(item => item.id === id);
    if (city)
        res.send(city);
    else
        res.status(404).send('City not found');
});
app.get('/api/test/:id/:name/:place', (req, res) =>{
    res.send(req.query);
})
app.listen(PORT, () => {
    console.log(`BACKEND RUNNING on port ${PORT}`);
});
console.log('BACKEND RUNNING');