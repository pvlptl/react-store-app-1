import React, {Component} from 'react';
import styled from 'styled-components';

class Search extends Component {

    state = {};

    render() {
        return (
            <Container>
                <i className="fas fa-search"/>
                <input type="text" placeholder='Product name...'/>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    
    background: white;
    border-radius: 5px;
    padding: 10px;
    
    i {
      margin-right: 5px;
    }
    input {
        margin: 0;
        height: auto;
        color: black;
        border: none;
        font-size: 12px;
        &:focus {
            border-bottom: none!important;
            box-shadow: none!important;
        }
        &::placeholder {
          color: black;
        }
    }
    
    @media screen and (max-width: 700px) {
        margin: 20px 0;
        input {
          width: 80vw;
        }
       
    }
    
`;

export default Search;
