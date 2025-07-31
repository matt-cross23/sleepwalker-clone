// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Interviews from "./components/pages/Interviews";
// import Blogs from "./components/pages/blogs";
// import SignUp from "./components/pages/signup";
// import Contact from "./components/pages/contact";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Interviews" element={<Interviews />} />
                <Route
                    path="/contact"
                    // element={<Contact />}
                />
                {/* <Route path="/blogs" element={<Blogs />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                /> */}
            </Routes>
        </Router>
    );
}

export default App;