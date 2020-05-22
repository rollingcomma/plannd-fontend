import React from 'react';

import { useUserState, useWindowDimensions } from '../../context/customerHook';


  
const IndexFooter = () => {
  const [userState] = useUserState()
  const { width } = useWindowDimensions()
  return (
    <div className={`bottom-banner ${userState && userState.user ? userState.user.preference.theme + "-secondary" : "classic-secondary"}`}>
      <div className="d-flex">
        <div id="footer-learnmore">
          <p>Learn More</p>
          <hr className="footer-learnmore-line"></hr>
          <div className="d-flex flex-column">
            <a href="/about" className="text-dark footer-learnmore-content">About Us</a>
            <a href="/qanda" className="text-dark footer-learnmore-content">Q&A</a>
          </div>
        </div>
      </div>
      {width > 600 && <div id="footer-middle">
        <img alt="" src="/assets/logo-horizontal-bw.png" id="footer-middle-logo" />
        <p id="copyright-text">Copyright &copy; 2020 plannd. All rights reserved.</p>
      </div>}
      <div id="footer-social-media" className="footer-media-container">
        <p id="footer-social-media-text">Follow us on all our social medias!</p>
        <div className="social-media-inner">
          <img alt="" src="/assets/snapchat-icon.png" id="snapchat-icon" />
          <img alt="" src="/assets/instagram-icon.png" id="instagram-icon" />
          <img alt="" src="/assets/twitter-icon.png" id="twitter-icon" />
          <img alt="" src="/assets/facebook-icon.png" id="facebook-icon" />
        </div>
      </div>
    </div>
  )
}
export default IndexFooter;