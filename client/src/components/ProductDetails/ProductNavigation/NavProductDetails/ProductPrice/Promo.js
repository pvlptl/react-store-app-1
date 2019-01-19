import React from 'react';
import styled from 'styled-components';
import Link from "react-router-dom/es/Link";

const Promo = props => {
    return (
        <Container>
            <h1>Акция! Подарок к ноутбукам ASUS серий FX504, FX505/705 и X570 на базе процессоров Intel Core i7/i9 8-го поколения!</h1>
            <p>До конца акции осталось: 03 : 04 : 20 : 12</p>
            <Link to="/">Условия акции</Link>
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
