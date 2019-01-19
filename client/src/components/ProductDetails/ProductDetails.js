import React from 'react';
import styled from 'styled-components';
import ProductNavigation from "./ProductNavigation/ProductNavigation";

const ProductDetails = props => {
    return (
        <div>
            <Container>
                <h4>Ноутбук ASUS X570UD-E4037 (90NB0HS1-M00460) Black</h4>
                <ProductNavigation/>
            </Container>
        </div>
    );
};

const Container = styled.div`
    min-height: 100vh;
    padding: 50px;
    background: #FFEEEE;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #DDEFBB, #FFEEEE);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #DDEFBB, #FFEEEE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export default ProductDetails;
