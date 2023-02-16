import restaurantFood from "../images/restaurant-food.jpg";
import { Link } from "react-router-dom";
export default function HeroSection() {
   return (
      <section className="hero-section">
         <div className="hero-section-text">
            <h1>
               Little Lemon<span>Chicago</span>
            </h1>
            <p>
               We are family owned Mediterranean restaurant, focused on traditional recipes served
               with a modern twist.
            </p>
            <Link to="reservation">Reserve a table</Link>
         </div>
         <img src={restaurantFood} alt="restaurant food" className="hero-section-image" />
      </section>
   );
}
