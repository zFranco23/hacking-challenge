import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./common/layout/Navbar/Navbar";

import Login from "./modules/auth/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
