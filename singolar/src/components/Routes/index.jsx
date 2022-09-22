import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default MainRoutes;
