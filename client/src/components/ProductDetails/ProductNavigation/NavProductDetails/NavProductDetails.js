import React from 'react';
import styled from "styled-components";
import ProductImages from "./ProductImages";
import ProductPrice from "./ProductPrice/ProductPrice";

const NavProductDetails = props => {
    return (
        <Container>
            <ProductImages/>
            <ProductPrice/>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 -10px;
    
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    
`;

export default NavProductDetails;
