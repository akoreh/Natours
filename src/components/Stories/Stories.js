import React from 'react';

import './Stories.css';
import Story from './Story/Story';
import Button from '../UI/Button/Button';
import Image1 from '../../assets/img/nat-8.jpg';
import Image2 from '../../assets/img/nat-9.jpg';
import BackgroundVideo from '../UI/BackgroundVideo/BackgroundVideo';
import Video from '../../assets/video/video.mp4';
import Webm from '../../assets/video/video.webm';

const stories = () =>{
    const content = [
        {
            title: 'I had the best week ever with my family!',
            caption: 'Mary Smith',
            image: Image1,
            text: 'Etiam cursus lectus id dignissim lobortis. Nullam condimentum dolor ac nulla iaculis, tempus blandit massa maximus. Integer mattis diam suscipit, luctus ex vel, dignissim velit. Curabitur elementum bibendum auctor.'
        },
        {
            title: 'WOW! my life is completely different now',
            caption: 'Jackd Dude',
            image: Image2,
            text: 'Praesent at ornare libero. Phasellus a magna cursus, porttitor tellus sed, tincidunt nunc. Nulla eget efficitur sem, nec ullamcorper sem. Donec fermentum neque sem, quis tempor elit imperdiet nec. Aliquam et elementum dui. Etiam sit amet felis gravida, fermentum magna sit amet, varius lectus.'
        }
    ]



    return (
        <section className="section-stories">

            <BackgroundVideo video={Video} webm={Webm}/>

            <div className="u-center-text u-margin-bottom-large">
                <h2 className="heading-secondary">We make people genuinely happy</h2>
            </div>
            {
                content.map(item => (
                    <div className="row">
                        <Story {...item}/>
                    </div>
                ))
            }

            <div className="u-center-text u-margin-top-huge">
                <Button text>More stories &rarr;</Button>
            </div>
        </section>
    );
}

export default stories;