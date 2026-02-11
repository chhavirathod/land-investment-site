// ...existing code...
import { useState, useEffect } from "react";
import logo from "./assets/dholera_logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" && window.matchMedia("(min-width:768px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width:768px)");
    const handler = (e) => setIsDesktop(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    if (isDesktop && isOpen) setIsOpen(false);
  }, [isDesktop, isOpen]);

  const mobileMenuStyle = {
    overflow: "hidden",
    transition: "max-height 280ms ease, opacity 200ms ease",
    maxHeight: isOpen ? "480px" : "0px",
    opacity: isOpen ? 1 : 0,
  };

  return (
    <header className="flex items-center justify-between bg-white text-black px-3">
      <div className=" flex items-center gap-6">
        <img src={logo} alt="Logo" className="logo pl-4" />
        <h1 className="text-xl md:text-2xl font-bold">Dholera SIR Land Investment</h1>
      </div>

      {/* Nav: show flex on desktop, block when mobile menu open, otherwise hidden */}
      <nav
        aria-label="Primary"
        className={`${isDesktop ? "flex" : isOpen ? "hidden" : "hidden"} md:items-center md:gap-6 pr-10 pl-4`}
        style={isDesktop ? { flexDirection: "row", alignItems: "center", gap: "1rem" } : undefined}
      >
        <a href="#" className="px-5 py-2 block md:inline-block effect">Home</a>
        <a href="#about" className="px-5 py-2 block md:inline-block effect">About</a>
        <a
          href="https://drive.google.com/drive/folders/1pN9k-W7kwthuryyuMNFqSwReSC-kDxYU?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 block md:inline-block effect"
        >
          Brochure
        </a>
        <a href="#contact" className="px-5 py-2 block md:inline-block effect">Contact</a>
        <a href="#news" className="px-5 py-2 block md:inline-block effect">News</a>
      </nav>

      {/* Hamburger (mobile only) */}
      <div className="md:hidden text-right">
        <button
          type="button"
          className="p-2"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((s) => !s)}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <div id="mobile-menu" className="mt-2 bg-white shadow rounded" style={mobileMenuStyle}>
          <a href="#" className="block px-4 py-3 border-t">Home</a>
          <a href="#about" className="block px-4 py-3 border-t">About</a>
          <a
            href="https://drive.google.com/drive/folders/1pN9k-W7kwthuryyuMNFqSwReSC-kDxYU?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 border-t"
          >
            Brochure
          </a>
          <a href="#contact" className="block px-4 py-3 border-t">Contact</a>
          <a href="#news" className="block px-4 py-3 border-t">News</a>
        </div>
      </div>
    </header>
  );
}
// ...existing code...