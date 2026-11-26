import { useState } from "react";

import Logo from "./components/Logo/Logo";
import HeroImage from "./components/HeroImage/HeroImage";
import EmailForm from "./components/EmailForm/EmailForm";

import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <Logo />
      </header>

      <HeroImage />

      <main>
        <section className="intro">
          <h1 className="intro__title">
            <span className="intro__title-highlight">We're</span> coming soon
          </h1>

          <p className="intro__description">
            Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our
            launch deals.
          </p>

          <EmailForm />
        </section>
      </main>
    </>
  );
}

export default App;
