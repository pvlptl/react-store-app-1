import React from 'react';
import styled from 'styled-components';
import {Carousel} from 'react-materialize'
import productUrl from '../../../../assets/images/products/product.png';

const ProductImages = props => {
    return (
        <Container>
            <Carousel
                fixedItem={<button className='btn'>ZOOM IMAGE</button>}
                options={{ fullWidth: true }}
                images={[
                    productUrl,
                    productUrl,
                    productUrl,
                    productUrl,
                    productUrl,
                    productUrl
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
`;

export default ProductImages;
