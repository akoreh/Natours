import React from 'react';

import './Button.css';

const button = (props) =>{
   const classes = props.text ? ['btn--text'] : ['btn'];

   if(props.animated){classes.push('btn--animated')};
   if(props.color){classes.push(`btn--${props.color}`)}

   return (
        <a href={props.href || '#'} className={classes.join(' ')}>{props.children}</a>
    );
}

export default button;