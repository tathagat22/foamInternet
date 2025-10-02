import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage:
              'url("https://comsol.co.za/img/hero-globe-01.jpg")',
          }}
        ></div>
        <div className="absolute inset-0 flex md:flex-row flex-col">
          {/* FWA Half */}
          <div
            className="flex-1 relative group left-cover"
            onMouseEnter={() => setHoveredSide("fwa")}
            onMouseLeave={() => setHoveredSide(null)}
            onClick={() => setHoveredSide(hoveredSide === "fwa" ? null : "fwa")}
          >
            <div
              className={`absolute inset-0 bg-[#001f3f]/80 opacity-0 ${
                hoveredSide === "fwa" ? "opacity-50" : ""
              } transition-opacity duration-500`}
            ></div>
            <div
              className={`relative z-10 p-8 md:p-16 text-white h-full flex flex-col justify-center items-center text-center opacity-0 ${
                hoveredSide === "fwa" ? "opacity-100 animate-slide-up" : ""
              } transition-opacity duration-500`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Fixed Wireless Access (FWA) Internet Connectivity
              </h2>
              <p className="mb-4 text-sm md:text-base max-w-lg">
                Comsol's public Fixed Wireless Access (FWA) microwave network
                harnesses licensed high-quality mmWave (28GHz) spectrum and
                3,7GHz spectrum to power exceptional and guaranteed network
                speeds and latency - from 1Mbps all the way to 1000Mbps.
                Offering alternate infrastructure and connectivity services that
                are fibre equivalent, maximising the experience for end users,
                customers and employees.
              </p>
              <p className="text-xl font-semibold mb-4">
                Connected. Without Limits.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/solutions/fixed-wireless"
                  className="bg-[#001f3f] text-white px-4 py-2 rounded uppercase hover:opacity-90 transition-opacity duration-300"
                >
                  Learn more
                </Link>
                <Link
                  to="/coverage"
                  className="bg-[#001f3f] text-white px-4 py-2 rounded uppercase hover:opacity-90 transition-opacity duration-300"
                >
                  View our coverage
                </Link>
              </div>
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full p-4 text-white text-center uppercase font-semibold transition-colors duration-300 ${
                hoveredSide === "fwa" ? "bg-[#FFC107]" : "bg-[#001f3f]/80"
              }`}
            >
              Fixed Wireless Access (FWA) Internet Connectivity ↑
            </div>
          </div>

          {/* Private Networks Half */}
          <div
            className="flex-1 relative group right-cover"
            onMouseEnter={() => setHoveredSide("private")}
            onMouseLeave={() => setHoveredSide(null)}
            onClick={() =>
              setHoveredSide(hoveredSide === "private" ? null : "private")
            }
          >
            <div
              className={`absolute inset-0 bg-[#001f3f]/80 opacity-0 ${
                hoveredSide === "private" ? "opacity-50" : ""
              } transition-opacity duration-500`}
            ></div>
            <div
              className={`relative z-10 p-8 md:p-16 text-white h-full flex flex-col justify-center items-center text-center opacity-0 ${
                hoveredSide === "private" ? "opacity-100 animate-slide-up" : ""
              } transition-opacity duration-500`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Private Networks
              </h2>
              <p className="mb-4 text-sm md:text-base max-w-lg">
                Comsol's Private Networks are designed for the exclusive use of
                an organisation and are built to cover specific locations. They
                offer better service and greater control and security compared
                to public networks.
              </p>
              <Link
                to="/solutions/private-networks"
                className="bg-[#001f3f] text-white px-4 py-2 rounded uppercase hover:opacity-90 transition-opacity duration-300"
              >
                Learn more
              </Link>
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full p-4 text-white text-center uppercase font-semibold transition-colors duration-300 ${
                hoveredSide === "private" ? "bg-[#FFC107]" : "bg-[#001f3f]/80"
              }`}
            >
              Private Networks ↑
            </div>
          </div>
        </div>
        {/* Default Centered Heading */}
        <div
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-right px-4 max-w-4xl transition-opacity duration-500 ${
            hoveredSide ? "opacity-0" : "opacity-100 animate-fade-in"
          }`}
        >
          <h1 className="text-3xl md:text-5xl leading-tight font-sans">
            Connecting South Africa for Nearly 30&nbsp;Years: Your Leading Fixed
            Wireless Access Provider for Cloud Connectivity and Private
            Networks.
          </h1>
        </div>
      </section>

      {/* Solutions Section */}
    

      {/* Overview Section */}
      <section className="py-12 bg-cover bg-center relative">
        
        <div className="container mx-auto px-4 relative">
          <div className="relative flex justify-center items-center">
            <div
              className="absolute left-0 top-0 w-[20%] h-[500px] bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://comsol.co.za/img/nodes-map-w.png")',
              }}
            ></div>
            <div
              className="absolute right-0 top-0 w-[20%] h-[500px] bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://comsol.co.za/img/nodes-map-e.png")',
              }}
            ></div>
            <div className="text-center flex flex-col items-center justify-center h-[500px] max-w-2xl z-10">
              <p className="mb-4  items-center">
                Get ready to revolutionise the way you do business. We're the
                fastest, most reliable network out there. Whether you're in the
                bustling heart of Johannesburg or the quietest corner of the Western
                Cape, we can connect your business to the world like never before -
                and in record time, too! The only alternate to fibre connectivity
                that offers total redundancy to existing connections. Don't believe
                us? Put us to the test by giving us a call at (010)&nbsp;140-8800 or
                shooting us an email at <a href="mailto:info@comsol.co.za" className="text-blue-600 hover:underline">info@comsol.co.za</a>.
              </p>
              <Link
                to="/solutions"
                className="bg-[#001f3f] text-white px-6 py-3 rounded font-bold hover:scale-105 transition-transform duration-300 inline-block"
              >
                Get connected
              </Link>
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-300 mt-12"></div>
      </section>

      {/* Why Choose Comsol? */}
      <section className="py-12 bg-[#0033A0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-white text-center mb-8">
            Why choose Comsol?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://comsol.co.za/img/fab-icon-glass.svg"
                alt="Business focussed"
                className="mx-auto h-12 w-12 mb-2"
              />
              <h3 className="text-xl mb-2 text-[#AAA9AA]">
                Business focussed
              </h3>
              <p className="text-white">
                Comsol's network and services have been built specifically with
                businesses in mind. As our customer, you will never have to
                worry about your service being an offshoot of a consumer
                product. We understand the connectivity requirements of
                businesses and will ensure that yours gets the best.
              </p>
            </div>
            <div className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://comsol.co.za/img/fab-icon-power.png"
                alt="Power protected"
                className="mx-auto h-12 w-12 mb-2"
              />
              <h3 className="text-xl mb-2 text-[#AAA9AA]">Power protected</h3>
              <p className="text-white">
                Comsol's network delivers uninterrupted service to its customers
                guaranteed by our SLAs, even during load shedding. Our network
                has been power resilient since its inception and we continue to
                ensure that power is a priority. We also have redundancies
                across all our network vendors, ensuring our customers
                connectivity remains live even during high stage blackouts.
              </p>
            </div>
            <div className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://comsol.co.za/img/fab-icon-map.png"
                alt="National coverage"
                className="mx-auto h-12 w-12 mb-2"
              />
              <h3 className="text-xl mb-2 text-[#AAA9AA]">
                National coverage
              </h3>
              <p className="text-white">
                Comsol's network reaches over 200 metropolitan areas covering
                more than 15,000km² of South Africa's major business districts,
                and extending further where needed. Plus we are able to bring
                you coverage or a private network anywhere, even in the most
                remote regions of SA.
              </p>
            </div>
            <div className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://comsol.co.za/img/fab-icon-handshake.svg"
                alt="Decades of experience"
                className="mx-auto h-12 w-12 mb-2"
              />
              <h3 className="text-xl mb-2 text-[#AAA9AA]">
                Decades of experience
              </h3>
              <p className="text-white">
                Comsol has been at the forefront of wireless connectivity since
                1997 and has consistently improved its technologies and services
                to ensure our customers are not only satisfied, but delighted.
              </p>
            </div>
            <div className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://comsol.co.za/img/fab-icon-time.png"
                alt="Rapid deployment"
                className="mx-auto h-12 w-12 mb-2"
              />
              <h3 className="text-xl mb-2 text-[#AAA9AA]">Rapid deployment</h3>
              <p className="text-white">
                No more waiting. Our rapid turnaround time means you can be
                connected faster than ever before, no matter where you are.
              </p>
            </div>
            <div className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://comsol.co.za/img/fab-icon-wholesale.png"
                alt="Service guaranteed"
                className="mx-auto h-12 w-12 mb-2"
              />
              <h3 className="text-xl mb-2 text-[#AAA9AA]">
                Service guaranteed
              </h3>
              <p className="text-white">
                Our single Service Level Agreement (SLA) offers the assurance of
                fibre with the agility of wireless in one simple solution, no
                matter how you connect.
              </p>
            </div>
          </div>
          <Link
            to="/solutions"
            className="bg-[#001f3f] text-white px-6 py-3 rounded font-bold hover:scale-105 transition-transform duration-300 block mx-auto w-fit mt-8"
          >
            Get connected
          </Link>
        </div>
      </section>

      {/* Latest Media and Articles Section */}
      <section className="py-12 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest media and articles</h2>
            <Link to="/media" className="text-blue-600 hover:underline">
              View more
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">
                What makes a wireless network enterprise-grade?
              </h3>
              <p className="mb-4">
                Increasing dependence on cloud services and growing adoption of AI are driving more South African organisations to move to enterprise-grade connectivity to su...
              </p>
              <Link to="/media/what-makes-a-wireless-network-enterprise-grade" className="text-blue-600 hover:underline">
                Read
              </Link>
            </div>
            <div className="p-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">
                Are Telecom Giants Letting SMEs Down?
              </h3>
              <p className="mb-4">
                South Africa’s Small and Medium Enterprises (SMEs) are a mighty force in the South African economy, but tend to be overlooked when it comes to telecommunica...
              </p>
              <Link to="/media/are-telecom-giants-letting-smes-down" className="text-blue-600 hover:underline">
                Read
              </Link>
            </div>
            <div className="p-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">
                Low orbit satellite services - what do they mean for FWA?
              </h3>
              <p className="mb-4">
                The prospect of SpaceX's high-profile Starlink internet service being licensed in South Africa has raised questions around where low orbit satellite services ...
              </p>
              <Link to="/media/low-orbit-satellite-services-what-do-they-mean-for-fwa" className="text-blue-600 hover:underline">
                Read
              </Link>
            </div>
            <div className="p-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">
                Comsol launches exclusive 5g fixed wireless access for businesses
              </h3>
              <p className="mb-4">
                Comsol, the leading provider of Fixed Wireless Access (FWA) last mile connectivity and Private Networks in South Africa, has launched a 5G FWA network to meet...
              </p>
              <Link to="/media/comsol-launches-exclusive-5g-fixed-wireless-access-for-businesses" className="text-blue-600 hover:underline">
                Read
              </Link>
            </div>
            <div className="p-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">
                Comsol Networks Completes Trial of TIP-incubated DCSG solution
              </h3>
              <p className="mb-4">
                Comsol Networks, a leading provider of enterprise-grade licensed wireless infrastructure, is pleased to announce it has completed its trial of the Telecom Inf...
              </p>
              <Link to="/media/comsol-networks-completes-trial-of-tip-incubated-dcsg-solution" className="text-blue-600 hover:underline">
                Read
              </Link>
            </div>
            <div className="p-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">
                Nelson Mandela University Together With Comsol Keeping The New Generation Connected.
              </h3>
              <p className="mb-4">
                Nelson Mandela University is a new generation comprehensive university distinguished by a wide range of study options and access routes open to students.Unive...
              </p>
              <Link to="/media/nelson-mandela-university-together-with-comsol-keeping-the-new-generation-connected" className="text-blue-600 hover:underline">
                Read
              </Link>
            </div>
          </div>
          <Link
            to="/media"
            className="bg-[#001f3f] text-white px-6 py-3 rounded font-bold hover:scale-105 transition-transform duration-300 block mx-auto w-fit mt-8"
          >
            View more
          </Link>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Brands that trust us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
            <img
              src="https://comsol.co.za/img/brand-altron.svg"
              alt="Altron"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img brand-img-s"
            />
            <img
              src="https://comsol.co.za/img/brand-ntt.png"
              alt="NTT"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img"
            />
            <img
              src="https://comsol.co.za/img/brand-bt.png"
              alt="BT"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img brand-img-l"
            />
            <img
              src="https://comsol.co.za/img/brand-saben.png"
              alt="Saben"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img"
            />
            <img
              src="https://comsol.co.za/img/brand-gijima.png"
              alt="Gijima"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img"
            />
            <img
              src="https://comsol.co.za/img/brand-mtn.svg"
              alt="MTN"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img brand-img-l"
            />
            <img
              src="https://comsol.co.za/img/brand-vodacom.png"
              alt="Vodacom"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img"
            />
            <img
              src="https://comsol.co.za/img/brand-dfa.png"
              alt="DFA"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img"
            />
            <img
              src="https://comsol.co.za/img/brand-econet.png"
              alt="Econet"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img brand-img-s"
            />
            <img
              src="https://comsol.co.za/img/brand-seacom.png"
              alt="Seacom"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img brand-img-s"
            />
            <img
              src="https://comsol.co.za/img/brand-cammington.svg"
              alt="Cammington"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img brand-img-l"
            />
            <img
              src="https://comsol.co.za/img/brand-vox.png"
              alt="Vox"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img brand-img-s"
            />
            <img
              src="https://comsol.co.za/img/brand-fmt.svg"
              alt="FMT"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img brand-img-l"
            />
            <img
              src="https://comsol.co.za/img/brand-liquid.png"
              alt="Liquid"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img brand-img-s"
            />
            <img
              src="https://comsol.co.za/img/brand-samancor.png"
              alt="Samancor"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 brand-img brand-img-s"
            />
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;