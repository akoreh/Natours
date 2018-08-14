import React from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Features from '../../components/Features/Features';
import Tours from '../../components/Tours/Tours';
import Stories from '../../components/Stories/Stories';
import Booking from '../../components/Booking/Booking';
import Footer from '../../components/Footer/Footer';

const layout = () => (
    <Wrapper>
        <Header />
        <main>
            <About />
            <Features />
            <Tours />
            <Stories />
            <Booking />
            <Footer />
        </main>
    </Wrapper>
);

export default layout;