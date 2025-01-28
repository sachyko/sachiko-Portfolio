import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
	return (
		<header className={styles.navbar}>
			<nav>
				<ul className={styles.navLinks}>
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
			</nav>
		</header>
	);
};

export default Navigation;
