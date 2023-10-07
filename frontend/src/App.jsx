import { BrowserRouter, Route, Routes } from "react-router-dom";
import Educacion from "./views/Educacion";
import Pagos from "./views/Pagos";
import "./App.css";
import Auth from "./views/Auth";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/education" element={<Educacion />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/pagos" element={<Pagos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
