import React from 'react';
import styled from 'styled-components';
import {addProductToShopingCartInit, removeProductFromShopingCartInit} from "../../redux/actions/shopingCartActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const ShopingCartItem = ({product, shopingCart, addProductToShopingCartInit, removeProductFromShopingCartInit}) => {

    const {image, title, price, amount} = product;

    const onSetProuctAmount = type => {
        if (type === '-') removeProductFromShopingCartInit(shopingCart, product);
        else if (type === '+') addProductToShopingCartInit(shopingCart, product);
    };

    return (
        <Container>
            <Image>
                <Img src={image} alt={title}/>
                <Calculator>
                    <CalculatorItem onClick={() => onSetProuctAmount('-')}><i className="fas fa-minus-square"/></CalculatorItem>
                    <CalculatorItem>{amount}</CalculatorItem>
                    <CalculatorItem onClick={() => onSetProuctAmount('+')}><i className="fas fa-plus-square"/></CalculatorItem>
                </Calculator>
            </Image>
            <Title>{title}</Title>
            <Price>${price * amount}</Price>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    background: #544a7d;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ffd452, #544a7d);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ffd452, #544a7d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    color: white;


`;

const Image = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Img = styled.img`
    width: 150px;
`;

const Title = styled.div`
    
`;

const Price = styled.div`
    
`;

const Calculator = styled.div`
    
`;

const CalculatorItem = styled.div`
    display: inline-block;
    padding: 5px;
    font-size: 25px;
    &:first-child, &:last-child {
        cursor: pointer;
        &:active {
          transform: scale(1.1);
        }
    }
   
`;

ShopingCartItem.propTypes = {
    addProductToShopingCartInit: PropTypes.func.isRequired,
    shopingCart: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    shopingCart: state.shopingCart
});

export default connect(mapStateToProps, {addProductToShopingCartInit, removeProductFromShopingCartInit})(ShopingCartItem);
