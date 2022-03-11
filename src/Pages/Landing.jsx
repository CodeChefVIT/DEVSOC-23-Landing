import React from "react";
import "./Landing.css";
import logo from "../Assets/logo.png";
import astronaut from "../Assets/Astronaut.png";
// import Navbar from "../Components/Navbar/Navbar";
import timeline from "../Assets/timeline.svg";
import FAQ from "../Components/FAQ/faq";
import FAQimg from "../Assets/FAQ.svg";
import rocket from "../Assets/rocket.svg";
import titlecards from "../Assets/Title.png";
import discord from "../Assets/discord.png";
import Footer from "../Components/Footer/Footer";
import uniswap from "../Assets/Uniswap.png";
import Celo from "../Assets/Celo.png";
import Deepnote from "../Assets/Deepnote.png";
import JoshTalks from "../Assets/JoshTalks.png";
import Uizard from "../Assets/Uizard.png";
import StickerMule from "../Assets/Stickermule.png";
import Navbar2 from "../Components/Navbar2/Navbar2";
import Timeline from "../Components/Timeline/Timeline";

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
      <a href="http://discord.codechefvit.com/" target="_blank">
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
            <img className="logo" src={logo}></img>
            <div>
              <h1 className="heading1">
                DEVSOC <span style={{ color: "#37ABBC" }}>‘22</span>
              </h1>
              <a className="button" href="http://cet-portal.codechefvit.com">
                <a style={{ color: "white" }}>Register Now</a>
              </a>
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
          <img className="logo1" src={astronaut}></img>
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
              <img className="logo3" src={FAQimg}></img>
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
            <a href="https://www.alchemy.com/">
              <img className="platinumlogo" src={titlecards}>

              </img>
            </a>
            <h1 className="about-head1">Platinum</h1>
            <a href="https://uniswap.org/">
              <img className="platinumlogo" src={uniswap}></img>
            </a>
            <a href="https://celo.org/">
              <img className="platinumlogo" src={Celo}></img>
            </a>

            <h1 className="about-head1">Silver</h1>
            <a href="https://deepnote.com/">
              <img className="platinumlogo" src={Deepnote}></img>
            </a>
            <a href="https://uizard.io/">
              <img className="platinumlogo" src={Uizard}></img>
            </a>
            <a href="https://www.joshtalks.com/">
              <img className="platinumlogo" src={JoshTalks}></img>
            </a>
            <h1 className="about-head1">In Kind</h1>
            <a href="https://mule.to/p2nx">
              <img className="platinumlogo" src={StickerMule}></img>
            </a>

          </div>
        </div>
        <img className="logo6" src={rocket}></img>
      </section>
      <section className="footer" id="contact">
        <Footer />
      </section>
    </>
  );
}
