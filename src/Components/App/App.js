import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import ScrollToHash from "./ScrollToHash";
import Header from "../Header/Header";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<ScrollToHash />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
