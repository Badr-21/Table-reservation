import restaurantChef from "../images/restaurant-chef.jpg";
export default function AboutSection() {
   return (
      <section className="about-section">
         <div className="about-section-text">
            <h2>
               Little Lemon<span>Chicago</span>
            </h2>
            <p>
               Little Lemon is a family-owned Mediterranean restaurant that blends traditional
               recipes with a modern twist. Our goal is to provide our customers with a unique
               dining experience that will take them on a culinary journey through the
               Mediterranean.
            </p>
         </div>
         <img src={restaurantChef} alt="restaurant chef" className="about-section-image" />
      </section>
   );
}
