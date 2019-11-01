import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <div className="call_us">
                <p> Call us on 0871-471-47 or 01201-474737
                    <Link to="#">Call Me Back</Link>
                    <a href="https://l87r78.github.io/socialApp-React-Firebase/" target="_blank">Live Chat</a>
                </p>
            </div>
            <div className="find_us">
                <div className="logo_and_info">
                    <div className="logo">
                        <img src={require('../../images/logo_PC_store2.PNG')} alt="" />
                    </div>
                    <div className="info">
                        <span>
                            PC-Store Computers International Horwich, Bolton, BL6 6PE
                        </span>
                    </div>
                </div>
                <div className="find_and_links">
                    <Link to="#"><i className="fas fa-map-marker-alt"></i>How To Find Us</Link>
                    <Link to="#"><i className="fas fa-store-alt"></i>Opening Times</Link>

                    <div className="links_follow_us">
                        <h4>Follow us</h4>
                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                        <Link to="#"><i className="fab fa-reddit"></i></Link>
                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                        <Link to="#"><i className="fab fa-youtube-square"></i></Link>
                    </div>
                </div>
            </div>
            <p className="copyRight">Copyright&copy; 2011-2019 <span>|</span> PC-Store Computers International Ltd.</p>
        </footer>
    )
}
export default Footer;