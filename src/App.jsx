import "./assets/css/variables.css";
import "./assets/css/App.css";
import "./assets/css/response.css";
import "./assets/css/materialdesignicons.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage, Wallet } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
