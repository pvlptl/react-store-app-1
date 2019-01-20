import React from 'react';
import styled from 'styled-components';
import Promo from "./Promo";
import BuyDetails from "./BuyDetails";

const ProductPrice = ({productDetails}) => {
    return (
        <Container>
            <Promo/>
            <BuyDetails productDetails={productDetails}/>
            <UL>
                <LI>Гарантия 12 месяцев, обмен/возврат товара в течение 14 дней</LI>
                <LI>Оплата Наличными, Visa/MasterCard, Приват24, Кредит, Оплата частями, Мгновенная рассрочка, Безналичными</LI>
                <LI>Продавец гарантирует упаковку заказанного товара, которая обеспечит целостность и сохранность его товарного вида</LI>
            </UL>
        </Container>
    );
};

const Container = styled.div`
    width: 50%;
    border-radius: 5px;
    margin: 0 5px;
    
    @media screen and (max-width: 800px) {
      width: 100%;
      margin-top: 10px;
    }
    
`;

const UL = styled.div`
    margin-top: 10px;
    background: white;
    border-radius: 5px;
    padding: 20px;
`;

const LI = styled.div`
    padding: 5px;
    margin: 0;
`;

export default ProductPrice;
