import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import ProjectsList from "../ProjectsList/ProjectsList";
// import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

//pictures
import ravenousImg from "./pictures/ravenous.jpg";
import homepage from "./pictures/homepage.jpg";

//Array of projects:
const info = [
	{
		src: ravenousImg,
		name: "Ravenous",
		category: "Restaurant Recommendation App",
		github: "https://github.com/sachyko/ravenous",
		projectLink: "https://sachyko.github.io/ravenous/",
		details:
			"Ravenous is a restaurant recommendation application built using React, allowing users to search for restaurants based on their location. It retrieves data from the Yelp API and presents it in  easy-to-navigate interface, enabling users to filter restaurant recommendations based on the best match, highest rating or most reviews.",
	},
	{
		src: homepage,
		name: "My Language Friends",
		category: "A Club Homepage",
		github: "https://github.com/sachyko/CompanyWebsite",
		projectLink: "https://sachyko.github.io/ClubWebsite/",
		details:
			"My Language Friends is a club homepage inspired by English Only Cafe. The first static website that I built to practice HTML and CSS. To improve my ability to style website I applied more custom colors and fonts, and lastly, style navigation elements like links and buttons.",
	},
];
function App() {
	return (
		<div className="App">
			<Router>
				<Navigation />
				{/* <Routes>
					<Route path="/contact" element={<Contact />} />
				</Routes> */}

				<Header />
				<section id="aboutMe">
					<AboutMe />
				</section>
				<section id="skills">
					<Skills />
				</section>
				<section id="projects">
					<ProjectsList info={info} />
				</section>
				<section id="footer">
					<Footer />
				</section>
			</Router>
		</div>
	);
}

export default App;
