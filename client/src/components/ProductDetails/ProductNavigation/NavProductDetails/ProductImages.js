import React from 'react';
import styled from 'styled-components';
import {Carousel, Modal, Button} from 'react-materialize'
import './ProductImages.scss';

const ProductImages = ({productDetails}) => {

    const ModalButton = (
        <Modal
            className='modal-container'
            trigger={<Button>ZOOM IMAGE</Button>}>
            <img src={productDetails.image} alt="Item Name"/>
        </Modal>
    );

    return (
        <Container>

            <Carousel
                fixedItem={ModalButton}
                options={{ fullWidth: true }}
                images={[
                    productDetails.image,
                    productDetails.image,
                    productDetails.image,
                    productDetails.image
                ]}
            />

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error impedit, neque. Amet eligendi error et, fuga magni maiores quae quidem quis. Aliquid consequuntur modi, molestias officia provident rerum voluptatibus. Amet earum itaque laudantium officiis quisquam ratione vel vitae! Adipisci alias eaque earum fugit libero nihil odit quam tempora tenetur ut.
            </p>

        </Container>
    );
};

const Container = styled.div`
    width: 50%;
    background: whitesmoke;
    border-radius: 5px;
    margin: 0 5px;
    padding: 50px;
    
    @media screen and (max-width: 800px) {
      width: 100%;
    }
    
`;

export default ProductImages;
