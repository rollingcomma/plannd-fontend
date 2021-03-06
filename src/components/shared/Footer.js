import React from 'react';

const Footer = () => {
  // constructor() {
  //   // debugger
  //   super();
  // }
  return (
    <div className="bottom-banner">
      <div className="footer-sitemap">
        <p>Site Map</p>
        <hr className="footer-sitemap-line"></hr>
        <p className="footer-sitemap-content">Notes</p>
        <p className="footer-sitemap-content">To-Dos</p>
        <p className="footer-sitemap-content">Links</p>
        <p className="footer-sitemap-content">Image Gallery</p>
      </div>
      <div id="footer-learnmore">
        <p>Learn More</p>
        <hr className="footer-learnmore-line"></hr>
        <p className="footer-learnmore-content">About Us</p>
        <p className="footer-learnmore-content">Q&A</p>
      </div>
      <div id="footer-middle">
        <img alt=""  src="/assets/logo-horizontal-bw.png" id="footer-middle-logo"/>
        <p id="copyright-text">Copyright &copy; 2020 plannd. All rights reserved.</p>
        </div>
      <div id="footer-social-media">
          <p id="footer-social-media-text">Follow us on all our social medias!</p>
          <div className="social-media-inner">
            <img alt=""  src="/assets/snapchat-icon.png" id="snapchat-icon"/>
            <img alt=""  src="/assets/instagram-icon.png" id="instagram-icon"/>
            <img alt=""  src="/assets/twitter-icon.png" id="twitter-icon"/>
            <img alt=""  src="/assets/facebook-icon.png" id="facebook-icon"/>
          </div>
      </div>
    </div>
  )
}
export default Footer;