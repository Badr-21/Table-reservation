import "../Style/BookingPage.css";
import chefs from "../images/Mario-and-Adrian-2.jpg";

export default function BookingForm({
   handleDate,
   handleTime,
   handleGuests,
   handleOccasion,
   handleSubmit,
   availableTimes,
   times,
   requiredError,
   handleDateBlur,
   guestesNumberError,
   selectedOccasion,
   disabled,
}) {
   return (
      <div className="booking-form">
         <form className="form" onSubmit={handleSubmit}>
            <div>
               <label htmlFor="res-date">Choose date</label>
               <br />
               <input type="date" id="res-date" onChange={handleDate} onBlur={handleDateBlur} />
               {requiredError ? <div style={{ color: "red" }}>Date is Required!</div> : null}
            </div>
            <div>
               <label htmlFor="res-time">Choose time</label>
               <br />
               <select id="res-time " onChange={handleTime} value={availableTimes}>
                  {times?.map((time) => {
                     return (
                        <option key={time} value={time}>
                           {time}
                        </option>
                     );
                  })}
               </select>
            </div>
            <div>
               <label htmlFor="guests">Number of guests</label>
               <br />
               <input
                  type="number"
                  placeholder="1"
                  min="1"
                  max="10"
                  id="guests"
                  onChange={handleGuests}
               />
               {guestesNumberError ? (
                  <div style={{ color: "red" }}>Required a number between 1 and 10</div>
               ) : null}
            </div>
            <div>
               <label htmlFor="occasion">Occasion</label>
               <br />
               <select
                  id="occasion"
                  onChange={handleOccasion}
                  value={selectedOccasion}
                  data-testid="occasion"
               >
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>business meeting</option>
                  <option>Other</option>
               </select>
            </div>

            <input
               className="submit"
               type="submit"
               value="Make Your reservation"
               disabled={disabled}
               data-testid="buttonSubmit"
            />
         </form>
         <img className="chefs-image" src={chefs} alt="chef Mario and chef Adrian" />
      </div>
   );
}
