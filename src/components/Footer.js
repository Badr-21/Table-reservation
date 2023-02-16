import logo from "../images/Logo.svg";

export default function Footer() {
   return (
      <section className="footer-section">
         <img src={logo} alt="logo" />
         <p>Little Lemon 2023 &#169;</p>
      </section>
   );
}
