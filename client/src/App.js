import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import NotFound from "./components/NotFound";

class App extends Component {

    render() {
        return (
            <Provider store={ store }>
                <Router>
                    <Container>
                        <Header/>
                        <Switch>
                            <Route exact path='/' component={ProductsList}/>
                            <Route exact path='/not-found' component={NotFound}/>
                            <Route exact path='/:titleForUrl/:id' component={ProductDetails}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Container>
                </Router>
            </Provider>
        );
    }
}

const Container = styled.div`
    min-height: 100vh;
    background: #3494E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EC6EAD, #3494E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export default App;
