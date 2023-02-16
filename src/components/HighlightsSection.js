import lemonDessert from "../images/lemon-dessert.jpg";
import greekSalad from "../images/greek-salad.jpg";
import bruchetta from "../images/bruchetta.svg";
export default function HighlightsSection() {
   return (
      <section className="highlights-section">
         <div className="highlights-section-text">
            <h2>This weeks specials!</h2>
            <button>Online Menu</button>
         </div>
         <div className="food-items">
            <div>
               <img src={greekSalad} alt="greek-salad" />
               <div className="name-price">
                  <h3>Greek salad</h3>
                  <span>12.99$</span>
               </div>
               <p>
                  The famous greek salad of crispy lettuce. peppers, olives and our Chicago style
                  feta cheese. garnished with cnunchy garlic and rosemary croutons.
               </p>
            </div>
            <div>
               <img src={bruchetta} alt="bruchetta" />
               <div className="name-price">
                  <h3>Bruchetta</h3>
                  <span>5.99$</span>
               </div>
               <p>
                  Our Bruschetta is made from grilled bread that has been smeared with garlic and
                  seasoned with salt and olive oil
               </p>
            </div>
            <div>
               <img src={lemonDessert} alt="lemon-dessert" />
               <div className="name-price">
                  <h3>Lemon dessert</h3>
                  <span>5.00$</span>
               </div>
               <p>
                  This camas straight from grandma's recipe book, overy last ingredient has been
                  sourced and is an authentic as can be imagined
               </p>
            </div>
         </div>
      </section>
   );
}
