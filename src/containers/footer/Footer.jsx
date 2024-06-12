import React from 'react';
import gpt3Logo from '../../logo.png';
import './footer.css';

const Footer = () => (
  <div className="spotit__footer section__padding">
    <div className="spotit__footer-heading">
      <h1 className="gradient__text">Find What You Need, Faster Than Ever.</h1>
    </div>

    <div className="spotit__footer-btn">
      <p>Sign Up for Updates</p>
    </div>

    <div className="spotit__footer-links">
      <div className="spotit__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>All Rights Reserved</p>
      </div>
      <div className="spotit__footer-links_div">
        <h4>Links</h4>
        <p>How It Works</p>
        <p>Social Media</p>
      </div>
      <div className="spotit__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="spotit__footer-links_div">
        <h4>Get in touch</h4>
        <p>
          <a href="mailto:abrahamfolorunso6@gmail.com">Send Email</a>
        </p>
        <p>
          Love the project? Join the team! <a href="https://wa.me/+2349039419430"></a>
        </p>
      </div>

    </div>

    <div className="spotit__footer-copyright">
      <p>@2024 SpotIt. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
