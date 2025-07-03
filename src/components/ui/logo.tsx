import "./logo.css";
import logo from "images/logo.svg";

export default function Logo() {
  return (
    <a href="/" className="logo" aria-label="Cruip">
      <img src={logo} alt="Cruip Logo" width={32} height={32} />
    </a>
  );
}
