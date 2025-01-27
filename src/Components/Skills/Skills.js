import React from "react";
import styles from "./Skills.module.css";

//pictures
import css from "./pictures/css.jpg";
import git from "./pictures/git.jpg";
import html from "./pictures/html.jpg";
import js from "./pictures/javascript.jpg";
import react from "./pictures/react.jpg";

const Skills = () => {
	return (
		<div className={styles.skills}>
			<h1>Tracking My Progress: Skills Gained So Far</h1>
			<div className={styles.skillscontainer}>
				<div className={styles.skill}>
					<img src={html} alt="htmllogo" />
					<p>Intermediate</p>
				</div>
				<div className={styles.skill}>
					<img src={css} alt="csslogo" />

					<p>Intermediate</p>
				</div>

				<div className={styles.skill}>
					<img src={js} alt="javascriptlogo" />

					<p>Intermediate</p>
				</div>

				<div className={styles.skill}>
					<img src={git} alt="gitlogo" />

					<p>Intermediate</p>
				</div>

				<div className={styles.skill}>
					<img src={react} alt="reactlogo" />

					<p>Beginner</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
