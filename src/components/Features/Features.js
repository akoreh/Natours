import React from 'react';

import './Features.css';
import FeatureBox from './FeatureBox/FeatureBox';

const features = () => {
    const features = [
        {
            title: 'Explore the world',
            icon: 'basic-world',
            text: 'Nullam tincidunt gravida ex, sit amet commodo eros mattis semper.'
        },
        {
            title: 'Meet nature',
            icon: 'basic-compass',
            text: 'Nullam tincidunt gravida ex, sit amet commodo eros mattis semper.'
        },
        {
            title: 'Find your way',
            icon: 'basic-map',
            text: 'Nullam tincidunt gravida ex, sit amet commodo eros mattis semper.'
        },
        {
            title: 'Live a healthier life',
            icon: 'basic-heart',
            text: 'Nullam tincidunt gravida ex, sit amet commodo eros mattis semper.'
        }
    ]


    return (
        <section className="section-features" id="section-features">
            <div className="row">
                {
                    features.map(item => (
                        <div className="col-1-of-4">
                            <FeatureBox icon={item.icon} title={item.title}>
                                {item.text}
                            </FeatureBox>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default features;