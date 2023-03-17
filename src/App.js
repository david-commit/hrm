import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/general/Landing/landing";
import Login from "./Pages/general/auth/login";
import EmployeeHome from "./Pages/employee/home/home";
import EmployeeMoney from "./Pages/employee/money/money";

function App() {
  return (
    <BrowserRouter>
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
          <Route path="home" element={<EmployeeHome />} />
          <Route path="money" element={<EmployeeMoney />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
