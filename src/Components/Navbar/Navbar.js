import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFootball,faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons'


class Navbar extends Component {
    state = {clicked: false}
    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-title'>Offseason Football</h1>
                <h1 className='navbar-logo'><FontAwesomeIcon icon={faFootball} /></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}


                </ul>
            </nav>
        )
    }
}

export default Navbar
