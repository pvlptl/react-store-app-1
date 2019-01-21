import React from 'react';
import styled from 'styled-components';
import Link from "react-router-dom/es/Link";

const Promo = () => {
    return (
        <Container>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit labore laborum, quisquam sed soluta voluptatibus.</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <Link to="/">Lorem ipsum dolor.</Link>
        </Container>
    );
};

const Container = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    h1 {
    color: indianred;
      font-size: 20px;
      padding: 0;
      margin: 0;
    }
    p {
        padding: 0;
        margin: 0;
    }
`;

export default Promo;
