import React, { Component } from 'react';
import styled from 'styled-components';
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
        <Container>
            <Header/>
        </Container>
    );
  }
}

const Container = styled.div`
    padding: 5px;
    background: #3494E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EC6EAD, #3494E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 100vh;
`;

export default App;
