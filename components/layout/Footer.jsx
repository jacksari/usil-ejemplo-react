import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-links">
                <li>
                    <a href="#" rel="noreferrer" className="footer-link scroll-link">home</a>
                </li>
                <li>
                    <a href="#" rel="noreferrer" className="footer-link scroll-link">about</a>
                </li>
                <li>
                    <a href="#" rel="noreferrer" className="footer-link scroll-link">services</a>
                </li>
                <li>
                    <a href="#" rel="noreferrer" className="footer-link scroll-link">featured</a>
                </li>
                <li>
                    <a href="#" rel="noreferrer" className="footer-link scroll-link">gallery</a>
                </li>
            </ul>
            <ul className="footer-icons">
                <li>
                    <a href="https://twitter.com" rel="noreferrer" target="_blank" className="footer-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com" rel="noreferrer" target="_blank" className="footer-icon">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" rel="noreferrer" target="_blank" className="footer-icon">
                        <i className="fab fa-squarespace"></i>
                    </a>
                </li>
            </ul>
            <p className="copyright">
                &copy; <span id="date"></span> <span className="company">usil exercise</span> . all
                right reserved DEVELOPER BY
                <a rel="noreferrer" className="jack" href="https://jacksari.com/" target="_blank"> JACKSARI</a>
            </p>
        </footer>
    );
}

export default Footer;
