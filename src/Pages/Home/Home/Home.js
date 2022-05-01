import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import OrderStatus from '../OrderStatus/OrderStatus';
import Products from '../Products/Products';
import Shipping from '../Shipping/Shipping';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Shipping></Shipping>
            <OrderStatus></OrderStatus>
            <Footer></Footer>
        </div>
    );
};

export default Home;