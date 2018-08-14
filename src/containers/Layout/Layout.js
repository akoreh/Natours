import React from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Features from '../../components/Features/Features';
import Tours from '../../components/Tours/Tours';
import Stories from '../../components/Stories/Stories';

const layout = () => (
    <Wrapper>
        <Header />
        <main>
            <About />
            <Features />
            <Tours />
            <Stories />
        </main>
    </Wrapper>
);

export default layout;