import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ProductItem from "./ProductItem";
import {getProducts} from "../redux/actions/productsActions";
import isEmpty from "../validation/isEmpty";
import Spinner from "./UI/Spinner/Spinner";
import NotFound from "./NotFound";
import {loadShopingCartFromLocalStorageInit} from "../redux/actions/shopingCartActions";

class ProductsList extends Component {

    state = {};

    componentDidMount() {
        const {products, getProducts, loadShopingCartFromLocalStorageInit} = this.props;
        if (products.length === 0) {
            getProducts();
            loadShopingCartFromLocalStorageInit();
        }

    }


    render() {

        const {products} = this.props;
        const errors = !isEmpty(this.props.errors);
        const loading = products.length === 0;
        const showProducts = loading ? <Spinner/> : (
            <>
                {products.map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </>
        );
        const showContent = errors ? <NotFound message={this.props.errors.message}/> : showProducts;

        return (
            <Container>
                {showContent}
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 50px;
`;

ProductsList.propTypes = {
    getProducts: PropTypes.func.isRequired,
    loadShopingCartFromLocalStorageInit: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    errors: PropTypes.object
};

const mapStateToProps = state => ({
    products: state.products.data,
    errors: state.errors
});

export default connect(mapStateToProps, {getProducts, loadShopingCartFromLocalStorageInit})(ProductsList);
