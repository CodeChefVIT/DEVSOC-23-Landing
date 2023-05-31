import React from "react";
import Logo from "../../Assets/CCLogo.svg";
import facebook from "../../Assets/Facebook.svg";
import instagram from "../../Assets/Instagram.svg";
import linkedin from "../../Assets/LinkedIn.svg";
import twitter from "../../Assets/Twitter.svg";
import github from "../../Assets/Subtract.svg";
import Medium from "../../Assets/Medium.svg";
import Helmet from "../../Assets/helmet.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <section id="Contact" class="section">
        <div class="padding-container">
          <img className="cclogo" src={Logo}></img>
          <div class="contact-content-container">
            <span class="section-title anim1" data-delay="0.1s">
              Contact
            </span>
            <div class="contact-image-container">
              <div class="contact-image-row1-container">
                <a
                  class="hover-change"
                  href="https://www.facebook.com/codechefvit"
                  target="_blank"
                >
                  <img src={facebook} alt="" />
                </a>
                <a
                  class="hover-change"
                  href="https://www.github.com/codechefvit"
                  target="_blank"
                >
                  <img src={github} alt="" />
                </a>
                <a
                  class="hover-change"
                  href="https://www.linkedin.com/company/codechef-vit-chapter/mycompany/"
                  target="_blank"
                >
                  <img src={linkedin} alt="" />
                </a>
                <a
                  class="hover-change"
                  href="https://www.instagram.com/codechefvit/"
                  target="_blank"
                >
                  <img src={instagram} alt="" />
                </a>
                <a
                  class="hover-change"
                  href="https://www.medium.com/codechef-vit"
                  target="_blank"
                >
                  <img src={Medium} alt="" />
                </a>
                <a
                  class="hover-change"
                  href="https://twitter.com/codechefvit"
                  target="_blank"
                >
                  <img src={twitter} alt="" />
                </a>
              </div>
              <div class="contact-image-row2-container">
                <div class="contact-desc-info">
                  <h1>Contact Us</h1>

                  {/* <a href="tel:+919880093000" style="color:white">Call Thaman: +91 98800 93000</a> */}


                  <span>Call Thaman: +91 98800 93000</span>
                  <span>Call Prarthavi: +91 99746 08203</span>
                  <span>Email: codechefvit@gmail.com</span>
                </div>
                <div class="contact-desc-address">
                  <h1>Address</h1>
                  <span>Vellore Institute of Technology, Vellore</span>
                  <span>Gorbachev Rd, Vellore- 632014</span>
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>
          <img className="helmet" src={Helmet}></img>
        </div>
      </section>
    </>
  );
}
