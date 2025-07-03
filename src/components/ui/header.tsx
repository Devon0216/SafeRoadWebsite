"use client";

import "./header.css";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          <div className="header-branding">
            <Logo />
          </div>
          <ul className="header-links">
            <li>
              <a href="/signin" className="header-link header-link-signin">Sign In</a>
            </li>
            <li>
              <a href="/signup" className="header-link header-link-register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
