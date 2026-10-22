import express from 'express';
import { __dirname } from './util.js';
import handlebars from 'express-handlebars';

const app = express()
const port = 3000

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const products = [
        { name_product: 'Hamburger chimbisecchions', price: 10 },
        { name_product: 'Coke', price: 20 },
        { name_product: 'Pancake', price: 30 }
    ];
    res.render("index", {
        title: "Motores",
        username: "Muchachos",
        admin: true,
        products: products
    })
})

app.get('/contact', (req, res) => {
    res.render("contact", {
        title: "Motores/contacto",
        data: "Por jugar con handlebars",
        email: "alvaro@example.com"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})