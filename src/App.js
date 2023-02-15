import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Pages/Home";
import ProtectedRoutes from "./Services/ProtectedRoutes";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
