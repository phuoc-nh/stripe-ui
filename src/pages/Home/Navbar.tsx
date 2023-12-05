import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import {AiOutlineClose} from 'react-icons/ai';

// import './NavBar.scss';
// import './Navbar-media.scss';

function NavBar() {
    const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);
    const handleHaburgerClick = () => {
        setIsHamburgerVisible((state) => !state);
    };

    return (
        <nav className="navbar">
            <div className="logo">Stripe Logo</div>

            <div className="links-media">
                <div>Prodcuts</div>
                <div>Solutions</div>
                <div>Developers</div>
                <div>Resources</div>
                <div>Pricing</div>
            </div>

            <div className="sign-in">
                <button>Sign in {`>`}</button>
            </div>
        </nav>
    );
}

export default NavBar;
