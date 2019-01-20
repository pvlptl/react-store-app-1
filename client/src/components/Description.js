import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {addProductToShopingCartInit} from "../redux/actions/shopingCartActions";
import FlexFillRemainingSpace from "./UI/FlexFillRemainingSpace";
import {markProductAsInShopingCart} from "../redux/actions/productsActions";

const Description = ({product, addProductToShopingCartInit, shopingCart, markProductAsInShopingCart}) => {

    let productFoundInShopingCart = false;
    for (let i = 0; i < shopingCart.length; i++) {
        if (shopingCart[i].id === product.id) {
            productFoundInShopingCart = true;
            break;
        }
    }

    const disabled = productFoundInShopingCart ;
    const onClick = () => {
        if (disabled) return;
        addProductToShopingCartInit(shopingCart, product);
        markProductAsInShopingCart(product);
    };

    const buyButtonText = disabled ? 'In Cart' : 'Buy Now!';

    return (
        <Container>
            <Price>${product.price}</Price>
            <Button disabled={disabled} onClick={onClick}>
                <i className="fas fa-shopping-cart"/>
                <span>{buyButtonText}</span>
            </Button>
            <Button>
                <i className="fas fa-balance-scale"/>
            </Button>
            <Button>
                <i className="fas fa-heart"/>
            </Button>
            <FlexFillRemainingSpace/>
            <Reviews>
                <span>48 reviews</span>
            </Reviews>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Price = styled.span`
    padding: 5px;
    background: #3494E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EC6EAD, #3494E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 5px;
    color: white;
`;

const Button = styled.span`
    margin-left: 5px;
    padding: 5px;
    border-radius: 5px;
    color: white;
    
    background: ${props => props.disabled ? "green" : "#3494E6"};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    
    &:active {
      transform: ${props => props.disabled ? "none" : "scale(1.1)"};
    }
    
    span {
      padding-left: 5px;
    }
    
`;

const Reviews = styled.span`
    font-size: 11px;
`;

Description.propTypes = {
    addProductToShopingCartInit: PropTypes.func.isRequired,
    markProductAsInShopingCart: PropTypes.func.isRequired,
    shopingCart: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    shopingCart: state.shopingCart
});

export default connect(mapStateToProps, {addProductToShopingCartInit, markProductAsInShopingCart})(Description);
