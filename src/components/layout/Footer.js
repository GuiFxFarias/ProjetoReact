import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul className="listItens">
        <li>
          <FaFacebook></FaFacebook>
        </li>
        <li>
          <FaInstagram></FaInstagram>
        </li>
        <li>
          <FaLinkedin></FaLinkedin>
        </li>
      </ul>
      <p>Nosso Rodapé</p>
    </footer>
  );
}

export default Footer;
