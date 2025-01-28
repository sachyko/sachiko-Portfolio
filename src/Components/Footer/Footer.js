import React, { useState, useEffect, useRef } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

// const github = "https://github.com/sachyko";
const Typewriter = ({ text }) => {
	const [displayedText, setDisplayedText] = useState("");
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index < text.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + text[index]);
				setIndex((prev) => prev + 1);
			}, 50); //Typing speed
			return () => clearTimeout(timeout);
		}
	}, [index, text]);
	return (
		<p>
			{displayedText}
			<span className={styles.cursor}>|</span>
		</p>
	);
};

const Footer = () => {
	const footerRef = useRef(null);
	const [isInView, setIsInView] = useState(false);

	// Check scroll position to trigger typing
	const checkIfInView = () => {
		if (footerRef.current) {
			const footerPosition = footerRef.current.getBoundingClientRect().top;
			const screenHeight = window.innerHeight;

			// Trigger when footer is in view (you can adjust this threshold)
			if (footerPosition <= screenHeight * 0.75) {
				setIsInView(true);
			}
		}
	};

	useEffect(() => {
		// Add scroll event listener to check visibility
		window.addEventListener("scroll", checkIfInView);
		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", checkIfInView);
		};
	}, []);
	return (
		<div className={styles.footerContainer} ref={footerRef}>
			<div className={styles.footer1}>
				<h1>"Let's Connect, Collaborate, and Create Together!"</h1>
				<div className={styles.text}>
					{isInView && (
						<>
							<Typewriter
								text="I'm Sachiko Ponpon - an aspiring developer based in Tokyo,
						passionate about creating meaningful digital experiences and bring
						innovative ideas to life, while constantly learning and growing in
						the tech world"
							/>

							<Typewriter
								text="Reach out today, and together, we’ll connect, collaborate, and
						create something amazing."
							/>
						</>
					)}
				</div>
				<Link to="/contact" className={styles.button}>
					Get In Touch
				</Link>
			</div>
			{/* <div className={styles.footer2}>
				<div className={styles.text}>
					<p>ponponsachiko23@gmail.com</p>
					<p>+81 80-9725-1196</p>
				</div>
				<div className={styles.pages}>
					<h2>Pages</h2>
					<ul className={styles.links}>
						<li>
							<a href="#aboutMe">About Me</a>
						</li>
						<li>
							<a href="#skills">Skills</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
					</ul>
				</div>
				
				<div className={styles.media}>
					<h2>Social Media</h2>
					<a href={github} target="_blank" rel="noopener noreferrer">
						<p>Github</p>
					</a>
				</div>
			</div> */}
		</div>
	);
};

export default Footer;
