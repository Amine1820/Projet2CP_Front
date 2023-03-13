import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { RequireAuth } from "react-auth-kit";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Waitings from "./components/Waitings";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <RequireAuth loginPath="/login">
              <Profile />
            </RequireAuth>
          }
        />
         <Route
          path="/waitings_dashboard"
          element={
            <RequireAuth loginPath="/login">
              <Waitings />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path = "/aboutus" element={<AboutUs/>}></Route>
        <Route path = "/events" element={<Events/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
