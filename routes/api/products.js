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

                const name = `${post.title} ${post._id}`;
                const uniqueName = name.toLowerCase().split(' ').join('-');

                return {
                    id: post._id,
                    title: post.title,
                    price: post.price,
                    image: post.image,
                    uniqueName
                }
            });
            res.json(products)
        })
        .catch(err => res.status(404).json(err));
});

module.exports = router;
