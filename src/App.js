import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/general/Landing/landing";
import Login from "./Pages/general/auth/login";
import EmployeeHome from "./Pages/employee/home/home";
import EmployeeMoney from "./Pages/employee/money/money";
import Signup from "./Pages/general/auth/signup";
import ClientSignup from "./Pages/client/signup/signup";
import ClientHome from "./Pages/client/home/home";
import ClientMoney from "./Pages/client/money/money";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/admin">
          <Route path="home" />
        </Route>

        <Route path="/client">
          <Route path="home" element={<ClientHome />} />
          <Route path="signup" element={<ClientSignup />} />
          <Route path="money" element={<ClientMoney />} />
        </Route>

        <Route path="/department">
          <Route path="home" />
        </Route>

        <Route path="/supervisor">
          <Route path="home" />
        </Route>

        <Route path="/employee">
          <Route path="home" element={<EmployeeHome />} />
          <Route path="money" element={<EmployeeMoney />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
