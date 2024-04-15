import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Registro from "./pages/Registro";
import Login from "./pages/Login";

export default function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
         </Routes>
      </Router>
   );
}
