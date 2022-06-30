import React from "react";
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-address">
          <h1 className="address-name">
            <u>Vintage Tech</u>
          </h1>
          <h2 className="address-info">300 Forest Hill Drive</h2>
          <h2 className="address-info">Miami, Florida</h2>
          <h2 className="address-info">800-444-444</h2>
        </div>

        <div className="social-container">
          <h2 className="social-footer-header">Stay Connected</h2>
          <div className="social-btns">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://facebook.com"
            >
              <img className="social-logo" src="https://res.cloudinary.com/redhero/image/upload/v1648940728/Donuts/fb-logo_lk3uqq.png" alt='' />
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://instagram.com"
            >
              <img className="social-logo" src="https://res.cloudinary.com/redhero/image/upload/v1648940728/Donuts/insta-logo_batr1m.png" alt=''/>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com"
            >
              <img className="social-logo" src="https://res.cloudinary.com/redhero/image/upload/v1648940728/Donuts/twitter-logo_wwhly5.png" alt='' />
            </a>
          </div>
        </div>

        <div className="footer-logo-container">
          <img className="footer-logo" src="https//www.google.com/" alt='' />
        </div>
      </div>
      <div className="copyright">
        <h4>Copyright &copy; 2022 by Duval Barrett</h4>
      </div>
    </div>
  );
};

export default Footer;
