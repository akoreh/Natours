import React from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';

const layout = () => (
    <Wrapper>
        <Header />
        <main>
            <About />
        </main>
    </Wrapper>
);

export default layout;