import logo from "../images/Logo.svg";
import iconHamburger from "../images/🦆 icon _hamburger menu_.svg";
import iconClose from "../images/icon-close-menu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
   const [mobileNav, setMobileNav] = useState(false);
   const handleNav = () => {
      setMobileNav(!mobileNav);
   };
   return (
      <header className="header">
         <img
            className="icon-hamburger"
            src={iconHamburger}
            alt="icon hamburger"
            onClick={handleNav}
         />
         <img src={logo} alt="logo" />
         <nav
            className="nav"
            style={
               mobileNav
                  ? { left: "0", transition: ".5s" }
                  : { left: "-13.5rem", transition: ".5s" }
            }
         >
            <img className="icon-close" src={iconClose} alt="icon-close" onClick={handleNav} />
            <ul className="ul">
               <li>
                  <Link to="/" style={visited}>
                     Home
                  </Link>
               </li>
               <li>About</li>
               <li>Menu</li>
               <li>
                  <Link to="reservation" style={visited}>
                     Reservations
                  </Link>
               </li>
               <li>OrderOnline</li>
               <li>Login</li>
            </ul>
         </nav>
      </header>
   );
}

const visited = {
   textDecoration: "none",
   color: "black",
};
