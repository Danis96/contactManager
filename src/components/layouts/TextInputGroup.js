import React from 'react';
import classnames from 'classnames';


const TextInputGroup = ({label, name, value, placeholder, type, onChange, error}) => {
    return ( 
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input  className={classnames('form-control form-contol-lg', {
                   'is-invalid': error
            })}
                    type={type} 
                    placeholder={placeholder} 
                    name={name} 
                    value={value} 
                    onChange={onChange}
                    />
             {
                 error && <div className='invalid-feedback'>
                                     {error}
                          </div>
             }
        </div>

     );
}


TextInputGroup.defaultProps = {
    type: 'text'
}
 
export default TextInputGroup;