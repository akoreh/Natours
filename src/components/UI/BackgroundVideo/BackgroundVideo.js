import React from 'react';

import './BackgroundVideo.css';


const backgroundVideo = (props)=>{
    return (
        <div className="bg-video">
            <video className="bg-video__content" autoPlay loop muted>
                <source src={props.video} type="video/mp4"/>
                <source src={props.webm} type="video/webm"/>
                Your browser is not supported!
            </video>
        </div>
    );
}

export default backgroundVideo;