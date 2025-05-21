import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../Hero/picture/logo.png";

import styles from "./Navigation.module.css";

const Navigation = () => {
	const location = useLocation();
	const isContactPage = location.pathname === "/contact";
	return (
		<div className={styles.navbarContainer}>
			<div className={styles.navbar}>
				<img src={logo} alt={logo} />

				<nav>
					<div className={styles.borderlineWrapper}>
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
					</div>

					<div className={styles.buttonWrapper}>
						<Link to="/contact" className={styles.button}>
							Get In Touch
						</Link>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navigation;
