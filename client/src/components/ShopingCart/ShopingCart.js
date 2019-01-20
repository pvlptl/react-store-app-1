import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ShopingCartItem from "./ShopingCartItem";
import FlexFillRemainingSpace from "../UI/FlexFillRemainingSpace";

class ShopingCart extends Component {

    state = {};

    render() {

        const {shopingCart} = this.props;

        // generate total price
        let totalPrice = 0;
        for (let i = 0; i < shopingCart.length; i++) {
            totalPrice += (shopingCart[i].price * shopingCart[i].amount);
        }

        const showContent = shopingCart.length === 0 ? (
            <p>Shopping cart is empty :(</p>
        ) : (

            <>
                {shopingCart.length > 1 && (
                    <Footer>
                        <Price>Total: ${totalPrice}</Price>
                        <FlexFillRemainingSpace/>
                        <Button>SUBMIT ORDER</Button>
                    </Footer>
                )}

                {shopingCart.map(product => (
                <ShopingCartItem key={product.id} product={product}/>
                ))}

                <Footer>
                    <Price>Total: ${totalPrice}</Price>
                    <FlexFillRemainingSpace/>
                    <Button>SUBMIT ORDER</Button>
                </Footer>

            </>

        );

        return (
            <Container>
                {showContent}
            </Container>
        );
    }
}

const Container = styled.div`
    
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    &:first-child {
      margin-bottom: 20px;
    }
`;

const Price = styled.div`
    
`;

const Button = styled.div`
    padding: 20px;
    border-radius: 5px;
    color: white;
    font-weight: bolder;
    background: green;
    cursor: pointer;
    &:active {
      transform: scale(1.1);
    }

`;

ShopingCart.propTypes = {
    shopingCart: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    shopingCart: state.shopingCart
});

export default connect(mapStateToProps)(ShopingCart);
