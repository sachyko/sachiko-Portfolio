import React from "react";
import me from "./picture/Sachiko2.jpg";
import styles from "./Hero.module.css";

const Header = () => {
	return (
		<div className={styles.aboutMeContainer}>
			<div className={styles.mainContent}>
				<div className={styles.left}>
					<h1>
						SACHIKO <br />
						PONPON
					</h1>
				</div>

				<div className={styles.image}>
					<img src={me} alt={me} />
				</div>

				<div className={styles.right}>
					<h2>A Front-End Web Developer based in Tokyo</h2>
					<p>
						I am a front-end web developer with a strong focus on creating
						clean, responsive, and effective websites. By working on freelance
						and personal projects, and continuously expanding my skills. I bring
						creative ideas to life through real websites that provide a great
						user experience.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
