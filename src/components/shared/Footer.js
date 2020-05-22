import React from 'react';
import { useUserState, useWindowDimensions }from '../../context/customerHook'

const Footer = () => {
  const { width } = useWindowDimensions();
  const handleFeatureSwitch = () => {

  }

  const [userState] = useUserState()
  return (
    <div className={`bottom-banner ${userState && userState.user ? userState.user.preference.theme + "-secondary": "classic-secondary"}`}>
      <div className="d-flex">
        <div className="footer-sitemap">
          <p>Site Map</p>
          <hr className="footer-sitemap-line"></hr>
          <a href="/user/feature/notes" onClick={()=> handleFeatureSwitch("notes")} className="footer-sitemap-content text-dark">Notes</a>
          <a href="/user/feature/todos" onClick={() => handleFeatureSwitch("todos")} className="footer-sitemap-content text-dark">To-Dos</a>
          <a href="/user/feature/links" onClick={() => handleFeatureSwitch("links")} className="footer-sitemap-content text-dark">Links</a>
          <a href="/user/feature/gallery" onClick={() => handleFeatureSwitch("gallery")} className="footer-sitemap-content text-dark">Image Gallery</a>
        </div>
        <div id="footer-learnmore">
          <p>Learn More</p>
          <hr className="footer-learnmore-line"></hr>
          <div className="d-flex flex-column">
            <a href="/about" className="text-dark footer-learnmore-content">About Us</a>
            <a href="/qanda" className="text-dark footer-learnmore-content">Q&A</a>
          </div>
        </div>
      </div>
      { width > 600 &&
        <div id="footer-middle">
          <img alt="" src="/assets/logo-horizontal-bw.png" id="footer-middle-logo" />
          <p id="copyright-text">Copyright &copy; 2020 plannd. All rights reserved.</p>
        </div>
      }
      
      <div id="footer-social-media" className="footer-media-container">
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