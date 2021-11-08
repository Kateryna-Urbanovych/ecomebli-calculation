import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
} from "reactstrap";
import logoIcon from "../assets/images/logo-icon.png";
import React from 'react';
import "../styles/header.scss";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";

export const Header = () => {
    const {pathname, findEl} = useLocation();
    const [isOpen, setOpen] = React.useState(false);
    let refs = {
        refAbout: document.querySelector('#about'),
        refSummary: document.querySelector('#contacts'),
        refPortfolio: document.querySelector('#portfolio'),
    }

    const executeScroll = (ref) => {
        if(pathname === '/'){
            ref.scrollIntoView();
        }
    };
    const toggle = () => setOpen(!isOpen);
    React.useEffect(() => {
        refs = {
            refAbout: document.querySelector('#about'),
            refSummary: document.querySelector('#contacts'),
            refPortfolio: document.querySelector('#portfolio'),
        }
        if(findEl){
            executeScroll(refs[findEl]);
        }
    }, [pathname, findEl])

    return(
        <Navbar expand="md" cssModule={{'navbar': 'header wrapper'}}>
            <NavbarBrand cssModule={{'navbar-brand': 'navbar-brand-button'}} href='/'>
                <div className='header-logo'>
                    <img className='h-100 mr-2' src={logoIcon} alt='ecomebli'/>
                    <span>ecomebli</span>
                </div>
            </NavbarBrand>
            <div className={'toggler '  + (isOpen ? 'open' : '')} onClick={toggle} >
                <div className='navbar-toggle__burger '/>
            </div>
            <Nav className="mr-auto w-75 justify-content-center flex-row navbar-custom" navbar>
                <div className='w-66 d-flex justify-content-center'>
                    <NavItem>
                        <NavLink
                            onClick={() => executeScroll(refs.refPortfolio)}
                            className='header-link'
                            to={{
                                pathname: '/',
                                findEl: 'refPortfolio',
                            }}
                        >Портфоліо</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            onClick={() => executeScroll(refs.refAbout)}
                            className='header-link'
                            to={{
                                pathname: '/',
                                findEl: 'refAbout',
                            }}
                        >Компанія</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            onClick={() => executeScroll(refs.refSummary)}
                            className='header-link'
                            to={{
                                pathname: '/',
                                findEl: 'refSummary',
                            }}
                        >Контакти</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='header-link' to="/products">Каталог</NavLink>
                    </NavItem>
                </div>
                <div className='w-33 d-flex justify-content-end'>
                    <a className='header-link phone' href='tel:0931826235'>093 182 62 35</a>
                    <a className='header-link phone' href='tel:0987554178'>098 755 41 78</a>
                </div>
            </Nav>
            <div className={"mobile-menu" + (isOpen ? ' mobile-menu--open' : '')}>
                <div className="wrapper">
                    <nav className="mobile-menu__navbar navbar">
                        <ul className="navbar-container">
                            <li>
                                <NavLink
                                    onClick={() => {
                                        toggle();
                                        executeScroll(refs.refPortfolio);
                                    }}
                                    className='header-link'
                                    to={{
                                        pathname: '/',
                                        findEl: 'refPortfolio',
                                    }}
                                >Портфоліо</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => {
                                        toggle();
                                        executeScroll(refs.refAbout);
                                    }}
                                    className='header-link'
                                    to={{
                                        pathname: '/',
                                        findEl: 'refAbout',
                                    }}
                                >Компанія</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => {
                                        toggle();
                                        executeScroll(refs.refSummary);
                                    }}
                                    className='header-link'
                                    to={{
                                        pathname: '/',
                                        findEl: 'refAbout',
                                    }}
                                >Контакти</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={toggle} className='header-link' to="/products">Каталог</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="contact-numbers header__contact-numbers mobile-menu__contact-numbers">
                        <div className="contact-numbers__text">Contact us:</div>
                        <div className="contact-numbers__item">093 182 62 35</div>
                        <div className="contact-numbers__item">098 755 41 78</div>
                    </div>
                </div>
                <div className="close-wrapper" onClick={toggle}/>
            </div>
        </Navbar>
    )
}