import React from "react";
import AlchemyLogo from "../Assets/alchemy-white.png";
import astronaut from "../Assets/Astronaut.png";
import Celo from "../Assets/Celo.png";
import Deepnote from "../Assets/Deepnote.png";
import discord from "../Assets/discord.png";
import FAQimg from "../Assets/FAQ.svg";
import JoshTalks from "../Assets/JoshTalks.png";
import logo from "../Assets/logo.png";
import rocket from "../Assets/rocket.svg";
import StickerMule from "../Assets/Stickermule.png";
import titlecards from "../Assets/Title.png";
import Uizard from "../Assets/Uizard.png";
import uniswap from "../Assets/Uniswap.png";
import FAQ from "../Components/FAQ/faq";
import Footer from "../Components/Footer/Footer";
import Navbar2 from "../Components/Navbar2/Navbar2";
import "./Landing.css";

export default function Landing() {
  const accordionData = [
    {
      title: "What's the cost of the hackathon?",
      content: `DEVSOC 22 is completely free thanks to our sponsors! We'll also provide you with enough swags, drinks, meals throughout the hackathon.`,
    },
    {
      title: "What's the application process like?",
      content: `You're required to register with us on Devfolio where you'll be asked for basic details and your resume. We’ll get to know about your abilities from your past projects, GitHub profile, participation/awards in other hackathons. We'll shortlist teams for the offline hackathon round through this.`,
    },
    {
      title: "I'm a fresher and I don't have a good resume. Will I be selected?",
      content: `We will be evaluating everyone based on different metrics. We'll take into account if you're a fresher and where you stand amongst your peers. If you don't have anything technical to add to your resume, feel free to add any public speaking events or other competitions you've been to.`,
    },
    {
      title: "Can I participate alone?",
      content: `No! This hackathon is strictly a team competition where you can have 2-5 members in your team. Most teams aim to have a mix of people with both design and developer skills`,
    },
    {
      title: "Do I need to have specific qualifications to be a part of the hack?",
      content: `If you love to code, you're more than welcome to participate in the hackathon.`,
    },
  ];
  return (
    <>
      {/* <Navbar /> */}
      <a href="http://discord.codechefvit.com/" target="_blank" rel="noreferrer">
        <div class="side-fixed-btn hover-change">
          <img src={discord} alt="" />
        </div>
      </a>

      <section className="hero">
        <div style={{ zIndex: 15 }}>
          {/* <Navbar /> */}
          <Navbar2 />
        </div>
        <section className="showcase">
          <div className="dev-container">
            <img className="logo" src={logo} alt=""></img>
            <div>
              <h1 className="heading1">
                DEVSOC <span style={{ color: "#37ABBC" }}>‘22</span>
              </h1>
            <div className="alchemy">
              <h4 style={{ color: "white" }}> Powered by <span><a href="https://www.alchemy.com/" target="_blank" rel="noreferrer"><img className="alchemy-logo" src={AlchemyLogo} alt="Alchemy logo"/></a></span></h4>
            </div>
            <div>
            <a className="button" href="/#">
                <a style={{ color: "white" }} href="/#">Register Now</a>
              </a>
            </div>
            </div>
          </div>
        </section>
      </section>

      <section className="features" id="about">
        <div
          className="container1"
          style={{
            alignItems: "flex-end",
          }}
        >
          <div>
            <h1 className="about-head">About Us</h1>
            <p className="about-text">
              DEVSOC is CodeChef-VIT’s annual flagship event hoping to empower
              young minds by bringing enthusiastic technocrats and thinkers
              under one roof. This year, the second iteration of the hackathon
              is being held with a goal to create a sprint like event, where
              participants create, hack, innovate to solve problems while
              adhering to the spirit of creativity and teamwork. The event is
              spread over three days, with the hackathon lasting 48 hours
              consisting of amazing swags, prizes, food and drinks!
            </p>
          </div>
          <img className="logo1" src={astronaut} alt=""></img>
        </div>
      </section>

      {/* <section className="timeline-features" id="timeline">
        <img className="timeline" src={timeline}></img>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <div>
            <h1 className="about-head">Timeline</h1>

            <img className="logo2" src={timeline1}></img>
            <Timeline />
          </div>
        </div>
      </section> */}
      <section className="faq-features" id="faq">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <div>
            <h1 className="about-head2" style={{ display: "flex" }}>
              FAQ
              <img className="logo3" src={FAQimg} alt=""></img>
            </h1>

            <div className="accordion" style={{ marginTop: "-25%" }}>
              {accordionData.map(({ title, content }) => (
                <FAQ title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="spon-features" id="sponsors">
        <div>
          <div>
            <h1 className="about-hea">Sponsors</h1>
            <h1 className="about-head1">Title</h1>
            <a href="https://www.alchemy.com/" target="_blank" rel="noreferrer">
              <img className="platinumlogo" src={titlecards} alt="">

              </img>
            </a>
            <h1 className="about-head1">Platinum</h1>
            <a href="https://uniswap.org/" target="_blank" rel="noreferrer">
              <img className="platinumlogo" src={uniswap} alt=""></img>
            </a>
            <a href="https://celo.org/" target="_blank" rel="noreferrer">
              <img className="platinumlogo" src={Celo} alt=""></img>
            </a>

            <h1 className="about-head1">Silver</h1>
            <a href="https://deepnote.com/" target="_blank" rel="noreferrer">
              <img className="platinumlogo" src={Deepnote} alt=""></img>
            </a>
            <a href="https://uizard.io/" target="_blank" rel="noreferrer">
              <img className="platinumlogo" src={Uizard} alt=""></img>
            </a>
            <a href="https://www.joshtalks.com/" target="_blank" rel="noreferrer">
              <img className="platinumlogo" src={JoshTalks} alt=""></img>
            </a>
            <h1 className="about-head1">In Kind</h1>
            <a href="https://mule.to/p2nx" target="_blank" rel="noreferrer">
              <img className="platinumlogo" src={StickerMule} alt=""></img>
            </a>

          </div>
        </div>
        <img className="logo6" src={rocket} alt=""></img>
      </section>
      <section className="footer" id="contact">
        <Footer />
      </section>
    </>
  );
}
