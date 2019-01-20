import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Description from "./Description";
import FlexFillRemainingSpace from "./UI/FlexFillRemainingSpace";

const ProductItem = ({product}) => {

    const {id, title, titleForUrl, image} = product;
    const productUrl = `${titleForUrl}/${id}`;

    return (
        <Container>
            <Link to={`/${productUrl}`}>
                <Image>
                    <img src={image} alt={title}/>
                </Image>
            </Link>
            <FlexFillRemainingSpace/>
            <Footer>
                <HR/>
                <Name>{title}</Name>
                <br/>
                <Description product={product}/>
            </Footer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    padding: 20px;
    background: white;
    margin: 5px;
    width: calc(25% - 10px);
    border-radius: 5px;
    
    @media screen and (max-width: 1300px) {
      width: calc(33.3333333% - 10px);
    }
    
    @media screen and (max-width: 1070px) {
      width: calc(50% - 10px);
    }
    
    @media screen and (max-width: 740px) {
      width: calc(100% - 10px);
    }
    
`;

const Image = styled.div`
    min-height: 300px;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      cursor: pointer;
      &:active {
        transform: scale(1.1);
      }
    }
`;

const Footer = styled.div`
    
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
