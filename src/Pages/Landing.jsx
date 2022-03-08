import React from "react";
import "./Landing.css";
import logo from "../Assets/logo.png";
import astronaut from "../Assets/Astronaut.png";
import Navbar from "../Components/Navbar/Navbar";
import timeline from "../Assets/timeline.svg";
import timeline1 from "../Assets/Timeline.png";
import FAQ from "../Components/FAQ/faq";
import FAQimg from "../Assets/FAQ.svg";
import rocket from "../Assets/rocket.svg";
import cards from "../Assets/cards.svg";
import title from "../Assets/title-cards.svg";
import titlecards from "../Assets/Title.png";
import discord from "../Assets/discord.png";
import Footer from "../Components/Footer/Footer";
import platinum from "../Assets/Platinum.png";
import uniswap from "../Assets/Uniswap.png";
import Celo from "../Assets/Celo.png";

export default function Landing() {
  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "Section 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
    },
    {
      title: "Section 4",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`,
    },
    {
      title: "Section 5",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`,
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
          <Navbar />
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

      <section className="features">
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

      <section className="timeline-features">
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
          </div>
        </div>
      </section>
      <section className="faq-features">
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

      <section className="spon-features">
        <div>
          <div>
            <h1 className="about-head">Sponsors</h1>
            <h1 className="about-head1">Title</h1>
            <img className="logo5" src={titlecards}></img>
            <h1 className="about-head1">Platinum</h1>
            <img className="platinumlogo" src={uniswap}></img>
            <img className="platinumlogo" src={Celo}></img>
            {/* <img className="platinumlogo" src={Celo}></img> */}
            {/* <img className="platinumlogo" src={uniswap}></img>
            <img className="platinumlogo" src={uniswap}></img> */}
            <h1 className="about-head1">Title</h1>
            <img className="logo5" src={cards}></img>
            <h1 className="about-head1">Title</h1>
            <img className="logo5" src={cards}></img>
          </div>
        </div>
        <img className="logo6" src={rocket}></img>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </>
  );
}
