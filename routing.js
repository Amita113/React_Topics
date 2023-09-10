import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Blog from "./blog";
import Contact from "./contact";
import './routing.css'

import { FaSearch } from 'react-icons/fa';

const icon = { FaSearch }
export default function Example() {
    return (
        <>
            <BrowserRouter>
                <div>
                    <ul >
                        <li>
                            <Link to="/"> Home</Link>
                        </li>
                        <li>
                            <Link to="/about"> About</Link>
                        </li>
                        <li>
                            <Link to="/blog"> Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact"> Contact</Link>
                        </li>
                        <div className="form1">
                            <FaSearch style={{ color: "blue", marginLeft: "800px",zIndex:"2" }} />

                            <input type="text" placeholder="search here" />

                        </div>
                    </ul>

                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}

//components as pages




