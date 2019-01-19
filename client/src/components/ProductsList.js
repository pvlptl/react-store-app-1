import React, {Component} from 'react';
import styled from 'styled-components';
import ProductItem from "./ProductItem";

class ProductsList extends Component {

    state = {};

    render() {
        return (
            <Container>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 50px;
`;

export default ProductsList;
