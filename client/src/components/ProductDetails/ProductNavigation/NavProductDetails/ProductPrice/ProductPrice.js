import React from 'react';
import styled from 'styled-components';
import Promo from "./Promo";
import BuyDetails from "./BuyDetails";

const ProductPrice = ({productDetails}) => {
    return (
        <Container>
            <Promo/>
            <BuyDetails productDetails={productDetails}/>
            <UL>
                <LI>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, facilis!</LI>
                <LI>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aspernatur fuga magnam. Aliquid, repudiandae!</LI>
                <LI>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, dolore, porro!</LI>
            </UL>
        </Container>
    );
};

const Container = styled.div`
    width: 50%;
    border-radius: 5px;
    margin: 0 5px;
    
    @media screen and (max-width: 800px) {
      width: 100%;
      margin-top: 10px;
    }
    
`;

const UL = styled.div`
    margin-top: 10px;
    background: white;
    border-radius: 5px;
    padding: 20px;
`;

const LI = styled.div`
    padding: 5px;
    margin: 0;
`;

export default ProductPrice;
