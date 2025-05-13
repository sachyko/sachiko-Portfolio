import React from "react";

import Hero from "../Hero/Hero";
import CodeJourney from "../CodeJourney/CodeJourney";
import ProjectsList from "../ProjectsList/ProjectsList";
import ProjectsCarousel from "../ProjectsCarousel/ProjectsCarousel";
import Footer from "../Footer/Footer";

import ravenousImg from "../App/pictures/ravenous.jpg";
import homepage from "../App/pictures/homepage.jpg";
import sweetCookies from "./sweet cookies.png";

//Array of projects:
const info = [
	{
		src: sweetCookies,
		name: "Sweet Street Cookies",
		category: "A Cookie Business Website",
		github: "https://github.com/sachyko/SweetStreetJpn",
		projectLink: "https://sweetstreetjpn.vercel.app/",
		details:
			"SweetStreet is a responsive cookie shop website I designed and developed to showcase a small homemade cookie business. The website features a stylish cookie catalog, an easy-to-use contact form for custom orders, and a warm, inviting design that reflects the homemade charm of the brand. Users can browse different cookie flavors, learn more about the business, and place custom order inquiries directly through the site.",
	},
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
		github: "https://github.com/sachyko/ClubWebsite",
		projectLink: "https://sachyko.github.io/ClubWebsite/",
		details:
			"My Language Friends is a club homepage inspired by English Only Cafe. The first static website that I built to practice HTML and CSS. To improve my ability to style website I applied more custom colors and fonts, and lastly, style navigation elements like links and buttons.",
	},
];

const Home = () => {
	return (
		<div>
			<section id="aboutMe">
				<Hero />
			</section>
			<section id="skills">
				<CodeJourney />
			</section>
			<section id="projects">
				<ProjectsCarousel info={info} />
			</section>
			<section id="footer">
				<Footer />
			</section>
		</div>
	);
};

export default Home;
