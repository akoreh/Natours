import React from 'react';

import './Input.css';
import Wrapper from '../../../hoc/Wrapper/Wrapper';

const input = (props) => {

    return (
        <Wrapper>
            <input id={props.name} type={props.type} className="input" placeholder={props.placeholder} required/>
            <label htmlFor={props.name} className="label">{props.placeholder}</label>
        </Wrapper>
    );
}

export default input;