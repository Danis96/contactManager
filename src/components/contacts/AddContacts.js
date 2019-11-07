import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layouts/TextInputGroup';
import axios from 'axios';

class AddContacts extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        website: '',
      
        errors: {}
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        console.log(this.state);

        const { name, email, phone, website } = this.state;

        if (name === '') {
            this.setState({
                errors: { name: 'Name is required' }
            });
            return;
        }
        if (email === '') {
            this.setState({
                errors: { email: 'Email is required' }
            });
            return;
        }
        if (phone === '') {
            this.setState({
                errors: { phone: 'Phone is required' }
            });
            return;
        }

        if (website === '') {
            this.setState({
                errors: { website: 'website is required' }
            });
            return;
        }

        const newContact = {
            name,
            email,
            phone,
            website,
          
        }

        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
        dispatch({
            type: 'ADD_CONTACT',
            payload: res.data
        })

        



        this.setState({
            name: '',
            email: '',
            phone: '',
           website: '',
            errors: {}
        });


        this.props.history.push('/');



    }

    render() {
        const { name, email, phone,  website, errors } = this.state;
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className='card mb-3'>
                                <div className='card-header'>
                                    Add Contact
                </div>
                                <div className='card-body'>
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                                        <TextInputGroup
                                            placeholder='Enter name'
                                            name='name'
                                            value={name}
                                            onChange={this.onChange}
                                            label='Name'
                                            error={errors.name}
                                        />

                                        <TextInputGroup
                                            placeholder='Enter email'
                                            type='email'
                                            name='email'
                                            value={email}
                                            onChange={this.onChange}
                                            label='Email'
                                            error={errors.email}
                                        />
                                        <TextInputGroup
                                            placeholder='Enter phone'
                                            name='phone'
                                            value={phone}
                                            onChange={this.onChange}
                                            label='Phone'
                                            error={errors.phone}
                                        />
                                        <TextInputGroup
                                            placeholder='Enter website'
                                            name='website'
                                            value={website}
                                            onChange={this.onChange}
                                            label='Website'
                                            error={errors.website}
                                        />
                                        <input type='submit' value='Add Contact' className='btn btn-light btn-block' />

                                    </form>

                                </div>
                            </div>
                        )
                    }
                }
            </Consumer>

        );
    }
}

export default AddContacts;