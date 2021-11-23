import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import { connect } from 'react-redux';
import { toggleNavbarLinksHidden } from '../../redux/navbar/navbar.actions';
import { auth } from '../../firebase/firebase.utils'
import './navbar.styles.scss';

function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
        setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const Navbar = ({ hidden, toggleNavBarLinks, user }) => {
    const width = useWindowSize();
    return (
        <nav className="navbar">
            <Link className="home" to="/">
                <Logo style={{backgroundColor: 'rgb(231, 218, 142)'}}/>
                <span className="logo-text">Bee Happy</span>                
            </Link>
            <div className="toggle-button" onClick={()=> { 
                toggleNavBarLinks();
            } }>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            { width > 630 || width <= 630 && !hidden ?
                <ul className="link-container" >
                    <Link className="menu link" to="/menu">
                        <li>VÁSÁRLÁS</li>
                    </Link>
                    <Link className="about link" to="/gallery">
                        <li>RÓLUNK</li>
                    </Link>
                    <Link className="contact link" to="/contact">
                        <li>KAPCSOLAT</li>
                    </Link>
                    {
                        user ?
                        <div className='login link' onClick={()=> auth.signOut()}>KIJELENTKEZÉS</div>
                        :
                        <Link className='login link' to='/login'><li>BEJELENTKEZÉS</li></Link>
                    }
                </ul>
                :null
            }
 

        </nav>
    )
}




const mapStateToProps = (state) => ({
    hidden: state.navbar.hidden,
    user: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    toggleNavBarLinks: ()=> dispatch(toggleNavbarLinksHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);