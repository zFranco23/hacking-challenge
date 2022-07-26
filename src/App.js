import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./common/layout/Navbar/Navbar";

import LoginContainer from "./modules/auth/containers/LoginContainer";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
