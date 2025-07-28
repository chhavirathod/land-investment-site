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
import Header from "./Header";
import NewsSection from "./News";

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Header />

      <main className="space-y-6">
        <section className="relative h-[80vh] bg-[url('https://www.tatacapital.com/blog/wp-content/uploads/2019/12/dolera-project-hl.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-white">
          {/* Fixed overlay */}
          <div className="absolute inset-0 bg-black/50 z-0"></div>

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

        <section className="p-8 sm:p-10 md:p-14 m-4 rounded-2xl bg-gray-50 shadow-lg">
          <h3 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 leading-tight text-center">
            Why Dholera Special Investment Region <br />
            <span className="text-orange-600">can give Maximum Return</span>
          </h3>
          <ul className="pl-5 space-y-6 list-none">
            <li className="flex">
              <div className="year_bold text-8xl pr-4">2025:</div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
                <div className="bg-orange-100 rounded-lg p-4">
                  Airport Trial Run for Cargo Planes soon —
                  <a
                    href="https://www.maritimegateway.com/terminal-at-dholera-airport-will-become-a-major-hub-for-cargo-handling/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Dholera Airport MRO details
                  </a>
                </div>
                <div className="bg-orange-100 rounded-lg p-4">
                  Export Import area Notified, Custom Port city Dholera
                  allocated —
                  <a
                    href="https://taxguru.in/custom-duty/dholera-notified-customs-port-trade-operations.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Loading and Unloading by CBIC
                  </a>
                </div>
                <div className="bg-orange-100 rounded-lg p-4">
                  Expressway, Central Spine Road, Ahmedabad to Dholera —
                  <a
                    href="https://deshgujarat.com/2025/03/27/ahmedabad-dholera-expressway-route-interchanges-and-airport-connectivity-explained/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Route and Airport Connectivity
                  </a>
                  ,
                  <a
                    href="https://deshgujarat.com/2025/05/30/three-reasons-delaying-completion-of-ahmedabad-dholera-expressway/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    Delay Reasons
                  </a>
                </div>
              </div>
            </li>

            <li className="flex">
              <div className="year_bold text-8xl pr-4 flex">2027:</div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
                <div className="bg-blue-100 rounded-lg p-4">
                  Semiconductor plant by Tata in 100 Acres —
                  <a
                    href="https://hindi.moneycontrol.com/india/indias-first-smart-industrial-city-is-being-built-in-dholera-tata-group-is-setting-up-a-semiconductor-plant-worth-rs-91000-crore-article-1963618.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Moneycontrol
                  </a>
                  ,
                  <a
                    href="https://techovedas.com/91000-crore-investment-indias-first-ai-enabled-semiconductor-fab-begins-construction-in-gujarat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    Techovedas
                  </a>
                </div>
                <div className="bg-blue-100 rounded-lg p-4">
                  Hospital, Fire station, School Work started at Dholera site —
                  <a
                    href="https://infra.economictimes.indiatimes.com/news/urban-infrastructure/gujarat-cm-reviews-development-works-at-dholera-special-investment-region/120839327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Economic Times
                  </a>
                  ,
                  <a
                    href="https://cmogujarat.gov.in/en/latest-news/development-works-dholera-sir-progress-review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    CMO Gujarat
                  </a>
                </div>
              </div>
            </li>

            {/* 2028 */}
            <li className="flex">
              <div className="year_bold text-8xl pr-4">2028:</div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
                <div className="bg-green-100 rounded-lg p-4">
                  Bullet train, Mumbai to Ahmedabad in 2 Hours —
                  <a
                    href="https://www.youtube.com/watch?v=vioRclRZDCM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Watch on YouTube
                  </a>
                </div>
                <div className="bg-green-100 rounded-lg p-4">
                  Delhi Mumbai Industrial Corridor —
                  <a
                    href="https://dpiit.gov.in/programmes-and-schemes/delhi-mumbai-industrial-corridordmic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    DPIIT Official Site
                  </a>
                </div>
                <div className="bg-green-100 rounded-lg p-4">
                  Mono Rail, Ahmedabad to Dholera under planning —
                  <a
                    href="https://we9properties.com/ahmedabad-to-dholera-monorail-gets-green-signal-with-%E2%82%B96000-crore-tender-approval/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Monorail Tender Approval
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section
          id="about"
          className="p-8 md:p-12 rounded-2xl shadow-lg mx-4 mb-10 border border-green-100"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-10">
            Why We're Unique, Expert & Most Valuable
          </h3>

          <ul className="space-y-10 text-gray-800 text-lg leading-relaxed">
            <li className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-xl transition">
              <div className="flex items-start gap-4">
                
                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Activation Area: 22.5 Sq. KM
                  </h4>
                  <p>
                    Plug-and-play infrastructure with all government facilities.
                    Ideal for industrial & retail investors. Final plots fall
                    under the Development Plan, ensuring structured growth.
                    Avoid false promises from unapproved plots.
                  </p>
                  <div className="mt-3">
                    <a
                      href="https://dholera.gujarat.gov.in/projects"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Government Projects
                    </a>
                    <span className="mx-2">|</span>
                    <a
                      href="https://dholera.gujarat.gov.in/news/update/1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Latest News Updates
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-xl transition">
              <div className="flex items-start gap-4">
        
                <div>
                  <h4 className="font-bold text-xl mb-3">
                    Strategic Land Selection Based on Expertise
                  </h4>
                  <p className="mb-4">
                    Our land choices are driven by government zoning insights,
                    town planning laws, and road-width/FAR rules. We attended
                    Vibrant Gujarat Summits and worked with municipal architects
                    to ensure legally sound investments.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base">
                    <li>
                      Between Activation Area & Expressway, near 250m Central
                      Spine Road
                    </li>
                    <li>
                      City Centre commercial land at 250m & 55m road junction
                    </li>
                    <li>
                      High Access Corridor land with 50-floor permission & 5 FAR
                    </li>
                    <li>NA (Non-Agricultural) permission already granted</li>
                    <li>No internal plotting — maintain maximum FAR</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </section>

  <section>
    <h3 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Gallery
          </h3>

  <div className="marquee">
      <div className="reel1">
        <img src={img1} alt="marquee-img-1" className="marquee-img w-[320px] h-[240px] mx-4 mb-4" />
        <img src={img2} alt="marquee-img-2" className="marquee-img w-[320px] h-[240px] mx-4 mb-4" />
        <img src={img3} alt="marquee-img-3" className="marquee-img w-[320px] h-[240px] mx-4 mb-4" />
        <img src={img7} alt="marquee-img-3" className="marquee-img w-[320px] h-[240px] mx-4 mb-4" />
        <img src={img1} alt="marquee-img-1" className="marquee-img w-[320px] h-[240px] mx-4 mb-4" />
        <img src={img2} alt="marquee-img-2" className="marquee-img w-[320px] h-[240px] mx-4 mb-4" />
        <img src={img3} alt="marquee-img-3" className="marquee-img w-[320px] h-[240px] mx-4 mb-4" />
        <img src={img7} alt="marquee-img-3" className="marquee-img w-[320px] h-[240px] mx-4 mb-4" />
      </div>
      <div className="reel2">
        <img src={img4} alt="marquee-img-4" className="marquee-img w-[320px] h-[240px] mx-4" />
        <img src={img5} alt="marquee-img-5" className="marquee-img w-[320px] h-[240px] mx-4" />
        <img src={img6} alt="marquee-img-6" className="marquee-img w-[320px] h-[240px] mx-4" />
        <img src={img8} alt="marquee-img-3" className="marquee-img w-[320px] h-[240px] mx-4" />
        <img src={img4} alt="marquee-img-4" className="marquee-img w-[320px] h-[240px] mx-4" />
        <img src={img5} alt="marquee-img-5" className="marquee-img w-[320px] h-[240px] mx-4" />
        <img src={img6} alt="marquee-img-6" className="marquee-img w-[320px] h-[240px] mx-4" />
        <img src={img8} alt="marquee-img-3" className="marquee-img w-[320px] h-[240px] mx-4" />
      </div>
  </div>
</section>

<section id="news">
  <NewsSection />
</section>


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
                  +91 9869332226
                </a>
              </div>
              <div>
                <p className="font-semibold text-gray-800">📍 Address:</p>
                <p className="text-gray-700">
                  Dholera Investment Office,
                  <br />
                  GIDC Industrial Estate,
                  <br />
                  Dholera, Gujarat, India
                </p>
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
