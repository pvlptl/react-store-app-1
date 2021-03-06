import React from 'react';
import styled from 'styled-components';
import Description from "../../../../Description";

const BuyDetails = ({productDetails}) => {
    return (
        <Container>
            <Description product={productDetails}/>
        </Container>
    );
};

const Container = styled.div`
    background: white;
    padding: 20px;
    margin-top: 10px;
    border-radius: 5px;
`;

export default BuyDetails;
