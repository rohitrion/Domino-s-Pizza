import React from 'react'
import "./footer.css";
import { useState, useEffect } from 'react';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (


        <footer>
            <div className="con">
                <div className="logo">
                    <img src="https://raw.githubusercontent.com/Ramanpreet6262/Dominos-Menu-Clone/master/dominos-menu-clone/src/static/assets/logo_white.svg" alt="Domino's logo" />
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/dominos"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/dominos"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/dominos/"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="copy">
                    <p>&copy; {year} Domino's Pizza, Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer