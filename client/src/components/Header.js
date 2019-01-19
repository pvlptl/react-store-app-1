import React from 'react';
import styled from 'styled-components';
import logoUrl from '../assets/images/logo.png';
import Search from "./Search";

const Header = props => {
    return (
        <Container>
            <a href="/">
                <Logo>
                    <img src={logoUrl} alt="Logo"/>
                </Logo>
            </a>
            <Search/>
            <FillRemainigSpace/>
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
                    <i className="fas fa-shopping-cart"/>
                    <span>Shopping Cart</span>
                </ButtonItem>
            </Buttons>
        </Container>
    );
};

const Container = styled.div`

    background: #FFEEEE;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #DDEFBB, #FFEEEE);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #DDEFBB, #FFEEEE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    padding: 20px;
    border-radius: 5px;
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

const FillRemainigSpace = styled.div`
    flex: 1 1 auto;
`;

const Buttons = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
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
