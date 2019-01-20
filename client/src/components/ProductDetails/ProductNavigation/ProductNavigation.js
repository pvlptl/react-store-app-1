import React from 'react';
import {Tabs, Tab} from 'react-materialize'
import './ProductNavigation.scss';
import Nav_ProductDetails from "./NavProductDetails/NavProductDetails";

const ProductNavigation = ({productDetails}) => {
    return (

        <Tabs className='tab-demo z-depth-1 product-navigation-tabs'>
            <Tab className='product-navigation-tab' title="Details" active><Nav_ProductDetails productDetails={productDetails}/></Tab>
            <Tab className='product-navigation-tab' title="Specifications">Specifications</Tab>
            <Tab className='product-navigation-tab' title="Images">Images</Tab>
            <Tab className='product-navigation-tab' title="Reviews">Reviews</Tab>
            <Tab className='product-navigation-tab' title="Delivery">Delivery</Tab>
        </Tabs>
    );
};

export default ProductNavigation;
