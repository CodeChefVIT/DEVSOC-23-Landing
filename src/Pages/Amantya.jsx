import React from "react";
import "./Landing.css";
import logo from "../Assets/logo.png";
import amantya from "../Assets/Title.png";
import NavBar from "../Components/Navbar2/Navbar2";
import Footer from "../Components/Footer/Footer";
import "tailwindcss/tailwind.css"

function Amantya() {
  return (
    <>
      <a href="./">
        <div className="absolute z-30 top-8 left-10 h-[50px] w-[50px]">
          <img src={logo} alt="" />
        </div>
      </a>

      <NavBar />
      <div className="flex flex-col items-center justify-center mx-[10%] mb-[5%]">
        <p className="text-white text-center text-3xl -mb-5">Title Sponsor</p>
        <img src={amantya} alt="" className="h-[100px]" />

        <p className="text-gray-300 text-center text-xl my-7 font-light">
          Amantya Technologies is a 500+ professional strong company. Developing
          next-gen solutions is the company's forte, particularly in the 5G
          domain. Amantya's expertise in the rapidly evolving 5G ecosystem is
          underpinned by its advanced 5G accelerators, including 5G SA Core with
          UPF, and 5G Network-in-a-Box. Amantya optimally uses these futuristic
          accelerators to deliver cutting-edge solutions like 5G Labs and
          Private 5G Networks for government-led nation-building initiatives,
          network operators, OEMs, and enterprises. Despite being a young SME
          with just over four years of being in existence, the company has
          proved its competence globally in digital and wireless domains.
          Amantya was recently recognized as “Telecom Startup of the Year 2023”
          at ETTelecom Awards, "Best SME in Telecom Ecosystem 2022" at India
          Mobile Congress for its 5G solutions and “Best 5G Solutions Provider
          of the Year” by Entrepreneur India. It has also been recognized as the
          "Most Preferred Workplace in IT/ITES 2022-23" by Marksmen Daily for
          its excellent work culture and employee-first policies. The company
          has also recently announced partnership with the state-run mobile
          network operator BSNL and world&apos;s leading enterprise open-source
          leader Red Hat.
        </p>

        <p className="text-left text-xl my-7 mr-auto text-[#37abbc]">
          Amantya&apos;s product & solution portfolio includes:
        </p>
        <p className="text-left text-xl my-7 mr-auto text-gray-300 font-light">
          <ol className="list-none list-inside">
            <li>
              <span className="text-white font-bold">5G Network in a Box:</span>{" "}
              A next-generation plug & play solution pre-integrated with 5G SA
              (Standalone) Core & RAN. Ideal to test & optimize 5G solutions in
              simulated environments, test new 5G use cases and deploy small
              private 5G networks.
            </li>
            <br />
            <li>
              <span className="text-white font-bold"> Private 5G:</span>{" "}
              Amantya&apos;s Enterprise 5G Network is a high-performance,
              end-to-end private wireless solution designed to meet the emerging
              needs of enterprises exploring new-age 5G and IoT use cases.
              Comprising a Radio Access Network, 5G SA Core, and a
              high-performance User Plane Function, Amantya&apos;s Enterprise 5G
              solution delivers high speed, reliability, and security, improving
              the enterprise&apos;s productivity, connectivity, and operational
              flexibility.
            </li>
            <br />
            <li>
              <span className="text-white font-bold">
                4G/5G Converged Core:
              </span>
              Cloud-native 4G/5G Converged Core features a full set of 3GPP
              compliant network functions for both 5G and 4G. Fully virtualized
              and containerized, it offers a flexible, cost-effective journey to
              latest fifth generation network. The cloud-native architecture
              ensures easy scaling, hardware decoupling, agility, and resilience
              across public, private, and hybrid clouds. Its Service-based
              Architecture provides carrier grade stability, and meets the key
              requirements of MNOs including high availability, security, and
              performance.
            </li>
            <br />
            <li>
              <span className="text-white font-bold">
                Multi-Access Gateway Solution:
              </span>
              3GPP standards-compliant Multi-access Gateway Solution simplifies
              future 5G network deployments enabling seamless connectivity with
              4G and WiFi networks. It brings a radical change in the way
              multiple network technologies (4G, 5G, non-3GPP) are integrated
              seamlessly, and multiple nodes (UPF, N3IWF, S/PGW-U) functionality
              is merged into a new network function. The company also offers a
              suite of digital services ranging from Software, Hardware,
              Embedded design & development, Cloud, AI ML, MEC, etc.
            </li>
          </ol>
        </p>
        <p className="text-left text-3xl my-7 mr-auto text-white">
          Check them out{" "}
          <a
            href="https://amantyatech.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#37abbc] text-left text-3xl my-7 mr-auto"
          >
            here
          </a>
          !!
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Amantya;
