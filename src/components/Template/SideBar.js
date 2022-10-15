import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/nis.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Nishant Pandey</h2>
        <p>
          <a href="mailto:nishantpandey2106@gmail.com">
            nishantpandey2106@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Nishant. I like building things. I am a{" "}
        <a href="https://pict.edu/">Pune Institute of Computer Technology</a>{" "}
        graduate, 2022, and Software Development Engineer (SDE) at{"  "}
        <a href="https://carefi.in/">Care.fi</a>
        {"  "}. Before Care.fi I was at{"  "}
        <a href="https://www.innothoughts.com/">
          Innothoughts Systems{" "}
        </a>and <a href="https://krixi.com/">Krixi Corporations</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Nishant Pandey <Link to="/">nishantpandey.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
