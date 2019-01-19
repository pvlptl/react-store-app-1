import React from 'react';
import styled from 'styled-components';
import productUrl from '../assets/images/products/product.png';
import {Link} from "react-router-dom";
import Description from "./Description";

const ProductItem = props => {
    return (
        <Container>
            <Link to="/product">
                <img src={productUrl} alt="Product Name"/>
            </Link>
            <HR/>
            <Name>Laptop ASUS X570UD-E4037 (90NB0HS1-M00460) Black</Name>
            <br/>
            <Description/>
        </Container>
    );
};

const Container = styled.div`
    padding: 20px;
    background: white;
    margin: 5px;
    width: calc(25% - 10px);
    border-radius: 5px;
    img {
      width: 100%;
      cursor: pointer;
      &:active {
        transform: scale(1.1);
      }
    }
    
    @media screen and (max-width: 1300px) {
      width: calc(33.3333333% - 10px);
    }
    
    @media screen and (max-width: 1000px) {
      width: calc(50% - 10px);
    }
    
    @media screen and (max-width: 700px) {
      width: calc(100% - 10px);
    }
    
`;

const Name = styled.div`
    text-align: center;
    font-size: 12px;
`;

const HR = styled.div`
    height: 2px;
    margin: 5px 0;
    background: #3494E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EC6EAD, #3494E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export default ProductItem;
