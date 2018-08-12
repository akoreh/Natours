import React from 'react';

import './Button.css';

const button = (props) =>{
   const classes = ['btn'];

   if(props.animated){classes.push('btn--animated')};
   if(props.color){classes.push(`btn--${props.color}`)}

   return (
        <a href="#" className={classes.join(' ')}>Discover Our Tours</a>
    );
}

export default button;