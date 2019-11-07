import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Contact extends Component {

    state = {
        showContactInfo:false
    }

    onDeleteContact = async (id,dispatch) => {

       await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
       dispatch({
        type: 'DELETE_CONTACT',
        payload: id
    })

       
    }




    render() {
        const { id, name, email, phone,  website } = this.props.contacts;
        const {showContactInfo} = this.state;
        return (
            <Consumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <React.Fragment>
                                
                                <h4>
                                    {name}
                                    <i className='fas fa-sort-down' style={styles.sortD} onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })} />
                                    <i className='fas fa-times' style={styles.delX} onClick={this.onDeleteContact.bind(this,id,dispatch)} />
                                    <Link to={`contact/edit/${id}`}>
                                        <i className='fas fa-pencil-alt' style={styles.pencil}></i>
                                    </Link>
                                </h4>
                                {
                                    showContactInfo ? (
                                        <div className='card card-body mb-3'>
                                            <ul className='list-group'>
                                                <li className='list-group-item'>
                                                    {email}
                                                </li>
                                                <li className='list-group-item'>
                                                    {phone}
                                                </li>
                                                <li className='list-group-item'>
                                                    {website}
                                                </li>
                                            </ul>

                                        </div>
                                    ) : null
                                }
                            </React.Fragment>
                        )
                    }
                }
            </Consumer>
        );
    }
}

const styles = {
    sortD: {
        marginLeft: '10px',
        cursor: 'pointer',

        
    },
    delX: {
        float: 'right',
        color: 'red',
        cursor: 'pointer'
    },
    pencil: {
        cursor: 'pointer',
        float: 'right',
        color: '#000',
        marginRight: '1rem'
    }
}

export default Contact;