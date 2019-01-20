import React, {Component} from 'react';
import styled from 'styled-components';
import ProductNavigation from "./ProductNavigation/ProductNavigation";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {getProductDetails} from "../../redux/actions/productsActions";
import isEmpty from "../../validation/isEmpty";
import Spinner from "../UI/Spinner/Spinner";
import NotFound from "../NotFound";

class ProductDetails extends Component{

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getProductDetails(id);
    }


    render() {

        let showData = '';
        const {data, loading} = this.props.productDetails;
        const error = this.props.errors.message;
        if (error) showData = <NotFound message={error}/>;
        else if (isEmpty(data) || loading) showData = <Spinner/>;
        else showData = (
            <Container>
                <h4>{data.title}</h4>
                <ProductNavigation productDetails={data}/>
            </Container>
        );

        return (
            <div>
                {showData}
            </div>
        );
    }
}

const Container = styled.div`
    min-height: 100vh;
    padding: 50px;
    background: #FFEEEE;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #DDEFBB, #FFEEEE);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #DDEFBB, #FFEEEE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

ProductDetails.propTypes = {
    getProductDetails: PropTypes.func.isRequired,
    productDetails: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    productDetails: state.products.productDetails,
    errors: state.errors,
});

export default connect(mapStateToProps, {getProductDetails})(withRouter(ProductDetails));
