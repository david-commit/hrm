import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/general/Landing/landing";
import Login from "./Pages/general/auth/login";
import Header from "./Components/Static/header/header";
import Footer from "./Components/Static/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin">
          <Route path="home" />
        </Route>

        <Route path="/client">
          <Route path="home" />
        </Route>

        <Route path="/department">
          <Route path="home" />
        </Route>

        <Route path="/supervisor">
          <Route path="home" />
        </Route>

        <Route path="/employee">
          <Route path="home" />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
