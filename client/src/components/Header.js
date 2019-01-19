import React from 'react';
import styled from 'styled-components';
import logoUrl from '../assets/images/logo.png';
import Search from "./Search";
import FlexFillRemainingSpace from "./UI/FlexFillRemainingSpace";
import Link from "react-router-dom/es/Link";
import {Modal} from 'react-materialize'
import ShopingCart from "./ShopingCart";

const Header = props => {

    const modalTrigger = (
        <i className="fas fa-shopping-cart"/>
    );

    return (
        <Container>
            <Link to="/">
                <Logo>
                    <img src={logoUrl} alt="Logo"/>
                </Logo>
            </Link>
            <Search/>
            <FlexFillRemainingSpace/>
            <Buttons>
                <ButtonItem>
                    <i className="fas fa-balance-scale"/>
                    <span>Comparison</span>
                </ButtonItem>
                <ButtonItem>
                    <i className="fas fa-heart"/>
                    <span>Wish Lish</span>
                </ButtonItem>

                <ButtonItem>
                    <Modal
                        trigger={modalTrigger}>
                        <ShopingCart/>
                    </Modal>
                    <span>Shopping Cart</span>
                </ButtonItem>

            </Buttons>
        </Container>
    );
};

const Container = styled.div`

    background: #c21500;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ffc500, #c21500);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ffc500, #c21500); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



    padding: 20px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
    
    a {
      color: black;
    }
    
`;

const Logo = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 50px;
    }
`;

const Buttons = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   color: white;
`;

const ButtonItem = styled.div`
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    i {
      font-size: 18px;
      cursor: pointer;
      &:active {
        transform: scale(1.3);
      }
    }
    span {
      font-size: 12px;
    }
`;

export default Header;
