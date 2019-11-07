import React from 'react';
import {Link} from 'react-router-dom';


const Header = (props) => {
    return ( 
        <nav className='navbar navbar-expand-sm  navbar-dark bg-danger mb-3 py-0' >
            <h4>
               <a style={styles.navbarBrand} href='/' className='navbar-brand'>
                     {props.title}
               </a>
            </h4>
            <ul className='navbar-nav mr-auto' style={styles.marginOfLinks}>
                <li className='nav-item'>
                    <Link  to='/' className='nav-link'>
                        <i className='fas fa-home'></i>    HOME
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link  to='/contact/add' className='nav-link'>
                        <i className='fas fa-plus'></i>   ADD
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link  to='/about' className='nav-link'>
                        <i className='fas fa-question'></i>    ABOUT
                    </Link>
                </li>
            </ul>
        </nav>
      );
}

Header.defaultProps = {
    title: 'Manager App'
}

const styles = {
    marginOfLinks: {
        color: '#fff'
    },
    navbarBrand: {
        marginLeft: '50px',
        paddingTop: 8
    }
}

 
export default Header;