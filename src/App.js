import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Phones from "./pages/Phones";
import Games from "./pages/Games";
import Homepage from "./pages/Homepage";
import OrderPage from "./pages/OrderPage";
import Thanks from "./pages/Thanks";
import "@stripe/stripe-js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/games" element={<Games />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
