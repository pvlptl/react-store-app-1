const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

// Route - api/products
router.get('/', (req, res) => {
    Product.find()
        .then(data => {
            if (data.length === 0) {
                const errors = {
                    message: 'No products in the database.'
                };
                return res.status(404).json(errors);
            }

            // generate data for client
            const products = data.map(post => {

                const titleForUrl = post.title.toLowerCase().split(' ').join('-');

                return {
                    id: post._id,
                    title: post.title,
                    titleForUrl,
                    price: post.price,
                    image: post.image
                }
            });
            res.json(products)
        })
        .catch(err => res.status(404).json(err));
});

// Route - api/products/:id
router.get('/:id', (req, res) => {

    const errors = {};
    const id = req.params.id;

    Product.findById(id)
        .then(product => {

            // generate data for client
            const data = {
                id: product._id,
                title: product.title,
                price: product.price,
                image: product.image
            };
            res.json(data)
        })
        .catch(() => {
            errors.message = 'Product data not found.';
            return res.status(400).json(errors);
        });

});

module.exports = router;
