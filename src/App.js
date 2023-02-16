import "./App.css";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";

function App() {
   return (
      <BrowserRouter basename="/">
         <HashRouter>
            <div className="App">
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/reservation" element={<BookingPage />} />
               </Routes>
            </div>
         </HashRouter>
      </BrowserRouter>
   );
}

export default App;
