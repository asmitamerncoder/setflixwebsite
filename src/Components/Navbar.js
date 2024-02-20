import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2>SETFLIX</h2>
        </div>
        <div className="mobile-menu" onClick={()=>{
          setMobileMenuOpen(!mobileMenuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={mobileMenuOpen ?"menu-list-open":"menu-list"}>
          <li>
            <a rel="noopener" href="" target="_self">
              Home
            </a>
          </li>
          <li>
            <a
              rel="noopener"
              href="https://youtu.be/RO3Qp_XdR0w"
              target="_blank"
            >
              Vampire Diaries
            </a>
          </li>
          <li>
            <a
              rel="noopener"
              href="https://youtu.be/oVzVdvGIC7U"
              target="_blank"
            >
              Peaky Blinders
            </a>
          </li>
          <li>
            <a
              rel="noopener"
              href="https://youtu.be/JGBIimq1I3A"
              target="_blank"
            >
              The Blacklist
            </a>
          </li>
          <li>
            <a
              rel="noopener"
              href="https://youtu.be/JWtnJjn6ng0"
              target="_blank"
            >
              The Crown
            </a>
          </li>
        </ul>

        <ul className="socialmedia-list">
          <li>
            <a className="" rel="noopener" href="#" target="_blank">
              <FaFacebookSquare className="socialIcon" />
            </a>
          </li>
          <li>
            <a rel="noopener" href="#" target="_blank">
              <FaInstagramSquare className="socialIcon" />
            </a>
          </li>
          <li>
            <a rel="noopener" href="#" target="_blank">
              <FaYoutubeSquare className="socialIcon" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
