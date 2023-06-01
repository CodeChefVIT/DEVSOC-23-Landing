import React from "react";
import ar from "./ar.svg";
import automation from "./automation.svg";
import blockchain from "./blockchain.svg";
import health from "./health.svg";
import social from "./social.svg";
import open from "./open.svg";  
import amantya from "./amantya.svg"

function Tracks() {
  return (
    <div className="m-[10%] font-bold">
      <h1 className="text-gray-300 align-middle text-center text-5xl mb-[5%]">
        Tracks
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#37abbc] shadow-md rounded-md p-4 flex justify-start items-center flex-col px-5">
          <img src={ar} alt="ar" className="w-[50%] mx-auto" />
          <h1 className="text-2xl font-bold my-5">AR/VR + Game Dev</h1>
          <p className="text-white text-center font-light">
            Augmented reality (AR) integrates the digital world and the real
            world by allowing virtual objects and information to be overlaid
            onto physical environments. It aims to allow users to interact with
            the real world and the digital world simultaneously and can be used
            in fields such as architecture, education, and gaming. Virtual
            Reality (VR) immerses users into a digital world and appears to
            completely replace their physical surroundings using virtual
            methods. VR technology engages the visual senses of the user and can
            also include their auditory and haptic senses. VR can be used in
            entertainment, education, healthcare, and training. The gaming
            industry is a vast one which increases in popularity day by day.
            Gamers are always on the hunt for a good game.
          </p>
        </div>
        <div className="bg-[#37abbc] shadow-md rounded-md p-4 flex justify-start items-center flex-col px-5">
          <img src={automation} alt="automation" className="w-[50%]" />
          <h1 className="text-2xl font-bold my-5">Automation Tools</h1>
          <p className="text-white text-center font-light">
            Automation tools are software applications that aim to automate
            repetitive tasks, increase efficiency, and streamline processes.
            Automation reduces the need for manual intervention and
            significantly reduces human efforts. Automation tools include
            robotic process automation tools, IT process automation tools,
            marketing automation tools, chatbot and virtual assistant tools,
            among others. Automation is possible in various domains, making it a
            crucial technology in the modern era.
          </p>
        </div>
        <div className="bg-[#37abbc] shadow-md rounded-md p-4 flex justify-start items-center flex-col  px-5">
          <img src={blockchain} alt="blockchain" className="w-[50%]" />
          <h1 className="text-2xl font-bold my-5">Blockchain</h1>
          <p className="text-white text-center font-light">
            Blockchain is a digital ledger or a record where you can track
            assets and record transactions. These transactions are grouped
            together in a block which are connected in a chain-like structure
            forming the blockchain. Blockchain is not just restricted to
            cryptocurrency. There are other applications like supply chain
            management and voting systems. Blockchain is transparent and secure.
            It uses a system called consensus, where the computers on the
            network work together and agree on the same version of the
            blockchain.
          </p>
        </div>
        <div className="bg-[#37abbc] shadow-md rounded-md p-4 flex justify-start items-center flex-col px-5">
          <img src={health} alt="health" className="w-[50%]" />
          <h1 className="text-2xl font-bold my-5">Health and Wellness</h1>
          <p className="text-white text-center font-light">
            The medical sector contains a wealth of opportunities for engineers
            to apply their skills and increase the capability of doctors and
            other medical staff to provide proper healthcare. Health and
            Wellness is a field where you can solve a problem faced by doctors,
            patients, chemists, or other healthcare workers. You can promote
            healthy lifestyles as well as find innovative solutions to a problem
            in the sector.
          </p>
        </div>
        <div className="bg-[#37abbc] shadow-md rounded-md p-4 flex justify-start items-center flex-col px-5">
          <img src={social} alt="social" className="w-[50%]" />
          <h1 className="text-2xl font-bold my-5">Social Good</h1>
          <p className="text-white text-center font-light">
            Across the world many NGO&apos;s and philanthropists try to make the
            world a better place. Not only them, others with significantly fewer
            resources also try to do so even though they are not well-off. You
            too can make a difference by innovating in this field. Anything that
            makes a positive impact on society is considered to come under
            social good. Social issues such as human rights, equality, education
            for the underprivileged, or environmental protection come under this
            track.
          </p>
        </div>
        <div className="bg-[#37abbc] shadow-md rounded-md p-4 flex justify-start items-center flex-col px-5">
          <img src={open} alt="open" className="w-[50%]" />
          <h1 className="text-2xl font-bold my-5">Open Innovation</h1>
          <p className="text-white text-center font-light">
            Open innovation is a track where someone can implement their ideas
            to solve any problem that they feel solving is worthwhile. It aims
            at fostering creativity to solve problems that may or may not
            require a slightly unconventional approach. In open innovation, it
            is possible to solve a problem that you see every day or one that
            appears less frequently, but still affects people adversely. Open
            innovation is great for those people who want to solve a problem
            that they see in society.
          </p>
        </div>
      </div>
      <h1 className="text-gray-300 align-middle text-center text-3xl my-[5%]">
        Sponsored Track
      </h1>
      <div className="bg-[#37abbc] shadow-md rounded-md p-4 flex justify-start items-start flex-col px-5 w-full md:w-2/3 lg:w-1/2 mx-auto">
        <img src={amantya} alt="social" className="w-[50%] mx-auto my-2 bg-black p-2 rounded-xl" />
        <h1 className="text-2xl font-bold my-5 text-center mx-auto">
          Leveraging 5G for Smart Cities
        </h1>
        <p className="text-white text-center font-light">
          The topic explores the use for 5G technology to create innovative
          solutions for improving the efficiency, sustainability, and quality of
          life in urban areas. Participants can focus on developing applications
          and services that utiize the high-speed, low-latency, and massive
          connectivity capabilities of 5G network to address various challenges
          faced by modern cities.
        </p>
        <p className="text-white text-left font-light">
          <br />
          Here are some sub-topics and project ideas that participants can
          consider within the broader theme of "Leveraging 5G for Smart Cities":
          <ol className="list-decimal list-inside">
            <li>Intelligent Transportation</li>
            <li>Environment Monioring</li>
            <li>Emergency Services</li>
            <li>AR and VR</li>
            <li>Remote Work and Telepresence</li>
            <li>Public Safety and Surveilance</li>
            <li>Healthcare Services</li>
            <li>Tourism and Hospitality</li>
            <li>Social Impact</li>
          </ol>
        </p>
      </div>
    </div>
  );
}

export default Tracks;
