const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/products-test-b7-2023-01');

const Product = mongoose.model('Product', {
    title: String,
    price: Number,
    thumbnail: String
}, 'products');

const app = express();
const port = 3000;

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render('index.pug', {message: "Hello, Pug!", title: "Trang chủ"});
});

app.get("/products", async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.render('products.pug', 
    {
        title: "Danh sách sản phẩm", 
        products1: products
    });
});

app.get("/blogs", (req, res) => {
    res.render('blog.pug', {message: "Hello, Pug!", title: "Trang blog"});
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


