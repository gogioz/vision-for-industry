"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
// import "../."

export default function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "cta", "features", "footer"];
      let current = "hero";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const sectionTop = el.offsetTop - 150;
          const sectionBottom = sectionTop + el.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLangChange = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
  };

  const linkClasses = (id) =>
    `block hover:text-[#0f204e] transition ${
      activeSection === id ? "text-[#0f204e] font-semibold" : "text-[#0f204e]"
    }`;

  return (
    <nav className="fixed w-full top-0 left-0  z-50 bg-white shadow-md">
      {/* Top bar */}
      <div
        className={`flex  justify-between w-full px-3 py-4 ${
          lang === "en" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Logo */}
        <Link
          href="#hero"
          className="font-bold flex flex-col justify-center items-center text-[#0f204e]"
        >
          <h1 className=" text-4xl ">
            {lang === "en" ? "VISION" : "فيچين"}
          </h1>
          <span className="text-xl">
            {lang === "en" ? "for industry" : "للصناعة"}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          className={`hidden md:flex items-center gap-x-8 text-3xl ${
            lang === "en" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <a href="#about" className={linkClasses("about")}>
            {lang === "en" ? "About" : "عن فيچين"}
          </a>
          <a href="#cta" className={linkClasses("cta")}>
            {lang === "en" ? "Partners" : "العملاء"}
          </a>
          <a href="#features" className={linkClasses("features")}>
            {lang === "en" ? "Services" : "خدماتنا"}
          </a>
          <a href="#footer" className={linkClasses("footer")}>
            {lang === "en" ? "Contact" : "تواصل معنا"}
          </a>

          <select
            value={lang}
            onChange={handleLangChange}
            className="outline-none xl:text-[28px] font-Amiri-Regular mx-6 text-[#0f204e]"
          >
            <option value="en">En</option>
            <option value="ar">Ar</option>
          </select>
        </div>

        {/* Burger button */}
        <button
          className="md:hidden text-4xl text-[#0f204e]"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[110%] left-0 w-full flex justify-center md:hidden z-40">
          <div
            className={`w-[80%] max-w-[360px] flex flex-col items-center text-center text-2xl  bg-white rounded-2xl shadow-xl border border-gray-100 py-6 space-y-4 text-[#0f204e] animate-fadeIn`}
          >
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className={`${linkClasses("about")} `}
            >
              {lang === "en" ? "About" : "عن فيچين"}
            </a>
            <a
              href="#cta"
              onClick={() => setIsOpen(false)}
              className={linkClasses("cta")}
            >
              {lang === "en" ? "Partners" : "العملاء"}
            </a>
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className={linkClasses("features")}
            >
              {lang === "en" ? "Services" : "خدماتنا"}
            </a>
            <a
              href="#footer"
              onClick={() => setIsOpen(false)}
              className={linkClasses("footer")}
            >
              {lang === "en" ? "Contact" : "تواصل معنا"}
            </a>

            <select
              value={lang}
              onChange={(e) => {
                handleLangChange(e);
                setIsOpen(false);
              }}
              className="outline-none text-xl font-Amiri-Regular text-[#0f204e]"
            >
              <option value="en">En</option>
              <option value="ar">Ar</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}
