import React from "react";
import { Link } from "react-router-dom";
import LogoLarge from "../../../assets/images/LogoLarge.svg";
import "./footer.css";
export default function Footer() {
  const navLinks = {
    Overview: "/",
    Transactions: "/transactions",
    Budgets: "/budgets",
    Pots: "/pots",
    ["Reccuring Bills"]: "/reccuring-bills",
  };
  return (
    <footer className="footer">
      <img src={LogoLarge} className="footer__logo" />
      <nav className="footer__nav">
        <ul className="footer__list">
          {Object.entries(navLinks).map(([label, path]) => (
            <li key={label} className="footer__item">
              <Link to={path} className="footer__item--link">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
