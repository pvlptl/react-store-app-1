import React from 'react';
import FlexFillRemainingSpace from "./UI/FlexFillRemainingSpace";
import styled from 'styled-components';

const Description = props => {
    return (
        <Container>
            <Price>$2500</Price>
            <Button>
                <i className="fas fa-shopping-cart"/>
                <span>Buy Now!</span>
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
    background: #FF4E50;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #F9D423, #FF4E50);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #F9D423, #FF4E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    border-radius: 5px;
    color: white;
    cursor: pointer;
    
    &:active {
      transform: scale(1.1);
    }
    
    span {
      padding-left: 5px;
    }
    
`;

const Reviews = styled.span`
    font-size: 11px;
`;

export default Description;
