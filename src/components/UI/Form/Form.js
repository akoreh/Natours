import React, {Component} from 'react';

import './Form.css';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';

class Form extends Component {
    state = {
        inputs: [
            {
                type: 'email',
                name: 'email',
                placeholder: 'Email Address',
            },
            {
                type: 'text',
                name: 'name',
                placeholder: 'Full name',
            },
            {
                type: 'radio',
                name: 'size',
                controls: [
                    {
                        label: 'Small tour group',
                        value: 'small'
                    },
                    {
                        label: 'Large tour group',
                        value: 'large'
                    }
                ]
            },
        ]
    }

    render(){
        return  (
            <form className="form">
                <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start booking now</h2>
                </div>
                {
                    this.state.inputs.map(input => {
                        if(input.type === 'radio'){
                            return (
                                <div className="form__group" key={input.name}>
                                    {
                                        input.controls.map(radio => (
                                            <div className="form__radio-group" key={radio.label}>
                                                <Radio {...radio} name={input.name}/>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }else {
                            return (
                                <div className="form__group" key={input.placeholder}>
                                    <Input {...input} />
                                </div>
                            )
                        }
                    })
                }
                <div className="form__group u-margin-top-medium">
                   <button className="btn btn--green">Next step &rarr;</button>
                </div>
            </form>
        );
    }
}

export default Form;
