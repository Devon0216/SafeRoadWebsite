import "./logo.css";
import React from "react";

export default function Logo() {
  return (
    <a href="/" className="logo" aria-label="Cruip">
      <img src="/logo.svg" alt="Cruip Logo" width={32} height={32} />
    </a>
  );
}
