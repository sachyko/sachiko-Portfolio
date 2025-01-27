import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
	return (
		<header className={styles.navbar}>
			<nav>
				<ul className={styles.navLinks}>
					<li>
						<a href="#aboutMe">About Me</a>
					</li>
					<li>
						<a href="#skills">Skills</a>
					</li>
					<li>
						Sachiko <br />
						Creates
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
				</ul>
				{/* <li>
					<Link to="/contact">Contact</Link>
				</li> */}
			</nav>
		</header>
	);
};

export default Navigation;
