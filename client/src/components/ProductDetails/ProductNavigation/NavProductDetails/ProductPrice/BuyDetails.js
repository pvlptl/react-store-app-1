import React from 'react';
import styled from 'styled-components';
import Description from "../../../../Description";

const BuyDetails = props => {
    return (
        <Container>
            <Description/>
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
