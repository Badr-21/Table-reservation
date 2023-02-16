import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservation" element={<BookingPage />} />
         </Routes>
      </div>
   );
}

export default App;
