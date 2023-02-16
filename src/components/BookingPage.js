import "../Style/HomePageStyles.css";
import { useState } from "react";
import Header from "./Header.";
import BookingForm from "./BookingForm";
import Modal from "react-modal";
export default function BookingPage() {
   const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
   const [selectedDate, setSelectedDate] = useState();
   const [availableTimes, setAvailableTimes] = useState(times[0]);
   const [selectedGuestsNumber, setSelectedGuestsNumber] = useState(1);
   const [selectedOccasion, setSelectedOccasion] = useState("Birthday");
   const [requiredError, setRequiredError] = useState(false);
   const [guestesNumberError, setGuestesNumberError] = useState(false);
   const [disabled, setDisabled] = useState(true);
   const [modal, setModal] = useState(false);

   const handleDate = (e) => {
      setSelectedDate(e.target.value);
      setDisabled(false);
      if (e.target.value) {
         setRequiredError(false);
      }
   };

   const handleTime = (e) => {
      setAvailableTimes(e.target.value);
   };

   const handleGuests = (e) => {
      if (e.target.value > 10 || e.target.value <= 0) {
         setGuestesNumberError(true);
      } else {
         setSelectedGuestsNumber(e.target.value);
         setGuestesNumberError(false);
      }
   };

   const handleOccasion = (e) => {
      setSelectedOccasion(e.target.value);
   };

   const handleDateBlur = (e) => {
      if (!e.target.value) {
         setRequiredError(true);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (selectedDate) {
         console.log(selectedDate, availableTimes, selectedGuestsNumber, selectedOccasion);
         setModal(true);
      } else {
         setRequiredError(true);
      }
   };

   return (
      <>
         <Header />
         <BookingForm
            handleDate={handleDate}
            handleTime={handleTime}
            handleGuests={handleGuests}
            handleOccasion={handleOccasion}
            handleSubmit={handleSubmit}
            availableTimes={availableTimes}
            times={times}
            requiredError={requiredError}
            handleDateBlur={handleDateBlur}
            guestesNumberError={guestesNumberError}
            disabled={disabled}
         />
         <Modal
            isOpen={modal}
            onRequestClose={() => {
               setModal(false);
            }}
            style={{
               content: {
                  backgroundColor: "#81c784",
                  width: "30rem",
                  height: "10rem",
                  margin: "0 auto",
                  borderRadius: ".5rem",
               },
            }}
         >
            <h3>Thanks for your reservation</h3>
            <p>{`We are happy to recieve you,
               Date: ${selectedDate}
               Time: ${availableTimes}
               Number of guests: ${selectedGuestsNumber}
               Occasion: ${selectedOccasion}
               `}</p>
         </Modal>
      </>
   );
}
