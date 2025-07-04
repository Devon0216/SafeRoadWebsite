import "./logo.css";
import React from "react";

export default function Logo() {
  return (
    <a href="/" className="logo" aria-label="SafeRoad">
      <img src="/images/logo.svg" alt="SafeRoad Logo" width={32} height={32} />
    </a>
  );
}
