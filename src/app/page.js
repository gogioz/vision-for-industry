"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  const [lang, setLang] = useState("en");
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar lang={lang} setLang={setLang} />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About lang={lang} />
      </section>
      <section id="cta">
        <CTA lang={lang} />
      </section>
      <section id="features">
        <Features lang={lang} />
      </section>
      <Footer lang={lang} />
    </main>
  );
}
