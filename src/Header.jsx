import { useState } from "react";
import logo from "./assets/dholera_logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-wrap items-center justify-between bg-white text-black px-4">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Logo" className="logo pl-4" />
        <h1 className="text-xl md:text-2xl font-bold pl-4">
          Dholera SIR Land Investment
        </h1>
      </div>

      <ul
        className={`
          md:w-auto md:flex md:items-center pr-20
        `}
      >
        <li className="p-4 md:p-6 effect text-center">
          <a href="#">Home</a>
        </li>
        <li className="p-4 md:p-6 effect text-center">
          <a href="#about">About</a>
        </li>
        <li className="p-4 md:p-6 effect text-center">
          <a
            href="https://drive.google.com/drive/folders/1pN9k-W7kwthuryyuMNFqSwReSC-kDxYU?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brochure
          </a>
        </li>
        <li className="p-4 md:p-6 effect text-center">
          <a href="#contact">Contact</a>
        </li>
        <li className="p-4 md:p-6 effect text-center">
          <a href="#news">News</a>
        </li>
      </ul>
    </header>
  );
}
