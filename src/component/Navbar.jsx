// src/components/Navbar.jsx
import React from 'react';
import Logo from '../../public/img/logo.png'; // Adjust the path as necessary

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <>
            <header className="navbar">
                <div className="nav-left">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="logo"
                    />
                    <span className="company-name">SAĞLAM OFİS MOBİLYA</span>
                </div>
                <div className="nav-right">
                    <a href="https://www.facebook.com/profile.php?id=61574033267015" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/accounts/onetap/?next=%2F" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="tel:+905330171241" aria-label="Telefon" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <a href="https://wa.me/905330171241" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            </header>

            {/* JSX içi stiller */}
            <style>{`
                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 14px 28px;
                    background: linear-gradient(90deg, #1e1e2f, #27273a);
                    color: white;
                    position: sticky;
                    top: 0;
                    z-index: 999;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }

                .nav-left {
                    display: flex;
                    align-items: center;
                }

                .logo {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-right: 12px;
                }

                .company-name {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #ffffff;
                    transition: opacity 0.3s ease;
                }

                .nav-right {
                    display: flex;
                    gap: 20px;
                }

                .nav-right a {
                    color: white;
                    font-size: 1.2rem;
                    transition: color 0.3s ease;
                }

                .nav-right a:hover {
                    color: #4fd1c5;
                }

                @media (max-width: 640px) {
                    .company-name {
                        display: none;
                    }

                    .navbar {
                        justify-content: space-between;
                        padding: 10px 16px;
                    }

                    .logo {
                        margin-right: 0;
                    }

                    .nav-right {
                        gap: 16px;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
