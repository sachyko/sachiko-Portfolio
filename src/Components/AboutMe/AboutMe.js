import React from "react";
import styles from "./AboutMe.module.css";

//picture
import me from "./picture/sachiko.jpg";

const AboutMe = () => {
	return (
		<div className={styles.aboutme}>
			<img src={me} logo="woman" />
			<div className={styles.aboutmeInfo}>
				<h1> Hi, I'm Sachiko</h1>
				<h2>A girl living in her dream country, Tokyo!</h2>
				<p>
					I stumbled upon programming after talking with my bestfriend in
					California. I started with drag and drop code lessons to try if this
					was something I'ld like to pursure in the future. Little did I know, I
					locked in myself from HTML, CSS, JavaScript and now learning React. I
					work as a lobby assistant throughout the day and study web development
					at night. But really, nice to meet you!
				</p>
			</div>
		</div>
	);
};

export default AboutMe;
