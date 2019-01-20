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
                Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i7-8550U (1.8 - 4.0 ГГц) / RAM 8 ГБ / HDD 1 ТБ / nVidia GeForce GTX 1050, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Endless OS / 1.96 кг / черный
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
