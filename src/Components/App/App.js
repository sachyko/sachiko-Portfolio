import React from "react";
import { Routes, Route } from "react-router-dom";

//components

import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import Contact from "../Contact/Contact";
import ScrollToHash from "./ScrollToHash";

function App() {
	return (
		<div className="App">
			<ScrollToHash />
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
