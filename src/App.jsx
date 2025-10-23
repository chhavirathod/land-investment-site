import { useState } from "react";
import "./index.css";
import { CheckCircle, Star } from "lucide-react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import pol1 from "./assets/pol1.jpg";
import pol2 from "./assets/pol2.jpg";
import pol3 from "./assets/pol3.jpg";
import pol4 from "./assets/pol4.jpg";
import pol5 from "./assets/pol5.jpg";
import pol6 from "./assets/pol6.jpg";
import pol7 from "./assets/pol7.jpg";
import pol8 from "./assets/pol8.jpg";
import pol9 from "./assets/pol9.jpg";
import pol10 from "./assets/pol10.jpg";
import pol11 from "./assets/pol11.jpg";
import pol12 from "./assets/pol12.jpg";
import pol13 from "./assets/pol13.jpg";
import pol14 from "./assets/pol14.jpg";
import pol15 from "./assets/pol15.jpg";
import pol16 from "./assets/pol16.jpg";
import pol17 from "./assets/pol17.jpg";
import pol18 from "./assets/pol18.jpg";
import Header from "./Header";
import Masonry from "./Masonry";
import RotatingText from "./RotatingText";
// import NewsSection from "./News";

function App() {
  const items = [
    // --- Items from reel1 (img1 - img8) with highly varied heights ---
    {
      id: "1",
      img: img1,
      height: 430, // Varied height (like original item 1)
    },
    {
      id: "2",
      img: img2,
      height: 390, // Varied height (like original item 2)
    },
    {
      id: "3",
      img: img3,
      height: 500, // Varied height (like original item 3)
    },
    {
      id: "4",
      img: img7,
      height: 390, // Varied height
    },
    {
      id: "5",
      img: img4,
      height: 520, // Varied height
    },
    {
      id: "6",
      img: img5,
      height: 280, // Varied height
    },
    {
      id: "7",
      img: img6,
      height: 450, // Varied height
    },
    {
      id: "8",
      img: img8,
      height: 380, // Varied height
    },
    // --- Items from reel2 (pol1 - pol18) with varied heights ---
    {
      id: "9",
      img: pol1,
      height: 440, // Keeping 240 for a base height
    },
    {
      id: "10",
      img: pol2,
      height: 410,
    },
    {
      id: "11",
      img: pol3,
      height: 550,
    },
    {
      id: "12",
      img: pol4,
      height: 320,
    },
    {
      id: "13",
      img: pol5,
      height: 270,
    },
    {
      id: "14",
      img: pol6,
      height: 420,
    },
    {
      id: "15",
      img: pol7,
      height: 360,
    },
    {
      id: "16",
      img: pol8,
      height: 580,
    },
    {
      id: "17",
      img: pol9,
      height: 370,
    },
    {
      id: "18",
      img: pol10,
      height: 440,
    },
    {
      id: "19",
      img: pol11,
      height: 390,
    },
    {
      id: "20",
      img: pol13,
      height: 300,
    },
    {
      id: "21",
      img: pol14,
      height: 570,
    },
    {
      id: "22",
      img: pol15,
      height: 290,
    },
    {
      id: "23",
      img: pol16,
      height: 470,
    },
    {
      id: "24",
      img: pol17,
      height: 340,
    },
    {
      id: "25",
      img: pol18,
      height: 390,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Header />

      <main className="space-y-6 rounded-3xl">
        <section className="rounded-3xl relative h-[80vh] bg-[url('https://www.tatacapital.com/blog/wp-content/uploads/2019/12/dolera-project-hl.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-white">
          {/* Fixed overlay */}
          <div className="rounded-3xl absolute inset-0 bg-black/50 z-0"></div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl text-center px-4">
            <h2 className="text-7xl font-semibold">
              Modi’s Dream Project <br />
              <p className="dholera_blue">Dholera SIR</p>
            </h2>
            <p className="mt-2 text-lg">
              Secure your future with smart city land investment.
            </p>
          </div>
        </section>

        <section className="p-8 sm:p-10 md:p-14 m-4 rounded-2xl">
          <h3 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800 leading-tight text-center">
            Why Dholera SIR is Your <br />
            Investment&nbsp;
            <RotatingText
              texts={["Hotspot!", "Epicenter!", "Hub!", "Goldmine!"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h3>
          <p className="text-center mb-8 text-gray-700">
            The value is locked in by massive government and corporate
            investment. <br />
            This isn't just land, it's a guaranteed asset.
          </p>
          <div className="block lg:!flex ">
            <ul className="px-5 space-y-10 list-none">
              <li className="flex items-start pb-10 border-b border-gray-200">
                <div className="flex-shrink-0 text-2xl font-bold w-20 pt-1 text-gray-400">
                  2025
                </div>
                <div className="flex-1 grid grid-cols-1 gap-4 pl-4 md:pl-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-white mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-2.5L21 16z"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 leading-tight">
                      The Doors Open
                    </h4>
                  </div>
                  <div className="text-gray-600 md:pl-8">
                    <p className="mb-3">
                      New Cargo Airport and Expressway in place, Dholera becomes
                      India's newest logistics hub. <br />
                      Get in Early: This is the phase where connectivity
                      converts potential into <b> hard asset value.</b>
                    </p>
                    <p className="text-sm space-x-2">
                      <a
                        href="https://www.maritimegateway.com/terminal-at-dholera-airport-will-become-a-major-hub-for-cargo-handling/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Airport Details
                      </a>
                      <span className="text-gray-400">|</span>
                      <a
                        href="https://taxguru.in/custom-duty/dholera-notified-customs-port-trade-operations.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Custom Port
                      </a>
                      <span className="text-gray-400">|</span>
                      <a
                        href="https://deshgujarat.com/2025/03/27/ahmedabad-dholera-expressway-route-interchanges-and-airport-connectivity-explained/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Expressway Route
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-start pb-10 border-b border-gray-200">
                <div className="flex-shrink-0 text-2xl font-bold w-20 pt-1 text-gray-400">
                  2027
                </div>
                <div className="flex-1 grid grid-cols-1 gap-4 pl-4 md:pl-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-white mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 leading-tight">
                      The People Arrive
                    </h4>
                  </div>
                  <div className="text-gray-600 md:pl-8">
                    <p className="mb-3">
                      Tata sets up shop, bringing high-paying jobs. Hospitals,
                      schools, and essential services are built. <br />
                      Cash Flow Starts: People need places to live, shop, and
                      operate businesses.{" "}
                      <b>Rental income and resale profits are coming.</b>
                    </p>
                    <p className="text-sm space-x-2">
                      <a
                        href="https://hindi.moneycontrol.com/india/indias-first-smart-industrial-city-is-being-built-in-dholera-tata-group-is-setting-up-a-semiconductor-plant-worth-rs-91000-crore-article-1963618.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Moneycontrol
                      </a>
                      <span className="text-gray-400">|</span>
                      <a
                        href="https://techovedas.com/91000-crore-investment-indias-first-ai-enabled-semiconductor-fab-begins-construction-in-gujarat/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Techovedas
                      </a>
                      <span className="text-gray-400">|</span>
                      <a
                        href="https://infra.economictimes.indiatimes.com/news/urban-infrastructure/gujarat-cm-reviews-development-works-at-dholera-special-investment-region/120839327"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Economic Times
                      </a>
                      <span className="text-gray-400">|</span>
                      <a
                        href="https://cmogujarat.gov.in/en/latest-news/development-works-dholera-sir-progress-review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        CMO Gujarat
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-start pb-8">
                <div className="flex-shrink-0 text-2xl font-bold w-20 pt-1 text-gray-400">
                  2028
                </div>
                <div className="flex-1 grid grid-cols-1 gap-4 pl-4 md:pl-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-white mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2c-4.97 0-9 4.03-9 9s4.03 9 9 9c.7 0 1.37-.08 2.03-.24L18.41 22 22 18.41 19.24 14.97c.16-.66.24-1.33.24-2.03 0-4.97-4.03-9-9-9zm-1.5 13H9V9h1.5v6zm3 0H12V9h1.5v6z"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 leading-tight">
                      The Final Link
                    </h4>
                  </div>
                  <div className="text-gray-600 md:pl-8">
                    <p className="mb-3">
                      Linked to Mumbai via bullet train and integrated into the
                      entire national industrial corridor. <br /> Maximum
                      R.O.I.: Your asset becomes fully integrated into the
                      country's economic spine, delivering
                      <b> premium long-term growth.</b>
                    </p>
                    <p className="text-sm space-x-2">
                      {/* Original 2028 Links */}
                      <a
                        href="https://www.youtube.com/watch?v=vioRclRZDCM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Bullet Train Clip
                      </a>
                      <span className="text-gray-400">|</span>
                      <a
                        href="https://dpiit.gov.in/programmes-and-schemes/delhi-mumbai-industrial-corridordmic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        DMIC Official Site
                      </a>
                      <span className="text-gray-400">|</span>
                      <a
                        href="https://we9properties.com/ahmedabad-to-dholera-monorail-gets-green-signal-with-%E2%82%B96000-crore-tender-approval/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Monorail Update
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <img src="/INDEX.png" alt="" height={20} width={350} className="block mx-auto md:mx-0 md:flex-shrink-0"/>
          </div>
        </section>

        <section
          id="about"
          className="bg-white text-gray-900 pb-16 px-8 md:px-16"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Text Section */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800 leading-tight">
                The Foundation for Smart Growth
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                When you invest, you need certainty. We offer land plots that
                are{" "}
                <strong className="text-blue-600">
                  legally secure, expert-vetted, and ready to develop{" "}
                </strong>
                not speculative dreams.
              </p>

              <a href="#contact"><button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                Explore More
              </button></a>
            </div>

            {/* Right Card Section */}
            <div className="space-y-8">
              {/* Card 1 */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Why Our Land Plots Are Different
                </h3>
                <ul className="space-y-3 text-gray-700 text-base">
                  <li>
                    <strong>Guaranteed Security:</strong> All plots are part of
                    the official{" "}
                    <strong className="text-blue-600">Development Plan</strong>,
                    ensuring legal safety.
                  </li>
                  <li>
                    <strong>Expert Selection:</strong> Chosen based on
                    government zoning and planning insights.
                  </li>
                  <li>
                    <strong>Ready to Build:</strong> Pre-approved with{" "}
                    <strong className="text-blue-600">
                      NA (Non-Agricultural)
                    </strong>{" "}
                    status and full infrastructure.
                  </li>
                  <li>
                    <strong>Maximized Value:</strong> No internal plotting,
                    offering the highest{" "}
                    <strong className="text-blue-600">
                      Floor Area Ratio (FAR)
                    </strong>{" "}
                    for development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-start justify-between hover:shadow-xl transition mt-5">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Prime Locations for Maximum Impact
              </h3>
              <ul className="space-y-4 text-gray-700 text-base">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3 leading-none">
                    •
                  </span>
                  <div>
                    <strong>Central Hub:</strong> Commercial land at the future{" "}
                    <strong className="text-blue-600">City Centre</strong>,
                    located at a high-visibility 250m and 55m road junction.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3 leading-none">
                    •
                  </span>
                  <div>
                    <strong>High-Access Corridor:</strong> Plots with
                    permissions for up to 50 floors and 5 FAR, near the
                    Expressway, within the 22.5 Sq. KM{" "}
                    <strong className="text-blue-600">Activation Area</strong>.
                  </div>
                </li>
              </ul>

              {/* Links Section */}
              <div className="mt-8 pt-4 border-t border-gray-200 text-gray-700">
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Government Projects
                </a>
                <span className="mx-3 text-gray-400">|</span>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Latest News Updates
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="p-4 block">
          <h3 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Gallery
          </h3>

          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </section>

        {/* <section id="news">
  <NewsSection />
</section> */}

        <section
          id="contact"
          className="bg-white py-8 md:px-16 rounded-2xl shadow-lg m-4"
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Have questions about investing in Dholera SIR? We’re here to
                help!
              </p>
              <div>
                <p className="font-semibold text-gray-800">📧 Email:</p>
                <a
                  href="mailto:modidreamdholerasir@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  modidreamdholerasir@gmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-gray-800">📞 Phone:</p>
                <a
                  href="tel:+919869332226"
                  className="text-blue-600 hover:underline"
                >
                  +91 7738332226
                </a>
              </div>
              <div>
                <p className="font-semibold text-gray-800">📍 Address:</p>
                <p className="text-gray-700">Mumbai, Pune, Surat, Dholera</p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 bg-gray-100 text-gray-600 text-sm mt-10">
        &copy; {new Date().getFullYear()} Dholera SIR Land Investment. All
        rights reserved.
      </footer>
    </div>
  );
}

export default App;
