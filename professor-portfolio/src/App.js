import React from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import Publications from "./components/Publications/Publications";
import Blog from "./components/Blog/blog";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import NotFound from "./components/Notfound/Notfound"; // Import your NotFound component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const userData = useSelector((state) => state);
  const isUserRegistered = userData.usersData.length > 0;

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/publications" element={<Publications />} />

          {/* Conditional Rendering for Registration and Login Routes */}
          {!isUserRegistered && (
            <Route path="/registration" element={<Registration />} />
          )}
          {isUserRegistered ? (
            <Route path="/login" element={<Login />} />
          ) : (
            <Route path="*" element={<NotFound />} /> // If user is not registered, show NotFound for any route
          )}

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
