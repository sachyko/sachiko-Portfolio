import React from "react";
import styles from "./Footer.module.css";
import logo from "../Hero/picture/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.logo}>
				<img src={logo} alt={logo} />
			</div>

			{/* <div className={styles.description}>
				<p>
					"I'm Sachiko Ponpon - an aspiring developer based in Tokyo, passionate
					about creating meaningful digital experiences and bring innovative
					ideas to life, while constantly learning and growing in the tech
					world" "Reach out today, and together, we’ll connect, collaborate, and
					create something amazing."
				</p>
			</div> */}
			<ul className={styles.navLinks}>
				<h3>Find Your Way</h3>
				<li>
					<Link to="/#aboutMe">About Me</Link>
				</li>
				<li>
					<Link to="/#skills">Skills</Link>
				</li>
				<li>
					<Link to="/#projects">Sachiko Creates</Link>
				</li>
				<li>
					<Link to="/#footer">Contact</Link>
				</li>
			</ul>
			<div className={styles.social}>
				<h3>Follow Along</h3>
				<li className={styles.gmail}>
					<i
						className="fa-sharp fa-solid fa-envelope"
						style={{ color: "#ac746a " }}
					></i>
					ponponsachiko23@gmail.com
				</li>
				<li>
					<i className="fa-brands fa-github" style={{ color: "#ac746a " }}></i>
					<a
						href="https://github.com/sachyko"
						target="_blank"
						rel="noopener noreferrer"
					>
						Github
					</a>
				</li>
				<li>
					<i
						className="fa-brands fa-linkedin"
						style={{ color: "#ac746a " }}
					></i>
					<a
						href="https://www.linkedin.com/in/sachiko-ponpon-1142791b7/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Linkedin
					</a>
				</li>
			</div>
			<div className={styles.buttonWrapper}>
				<Link to="/contact" className={styles.button}>
					Get In Touch
				</Link>
			</div>
		</div>
	);
};

export default Footer;
