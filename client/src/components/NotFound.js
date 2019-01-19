import React from 'react';
import styled from 'styled-components';

const NotFound = ({message}) => {
    return (
        <Message>
            <h4>Error:</h4>
            {message}
        </Message>
    );
};

const Message = styled.div`
    width: 300px;
    margin: 0 auto;
`;

export default NotFound;
