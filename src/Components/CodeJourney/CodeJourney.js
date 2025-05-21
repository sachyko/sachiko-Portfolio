import React from "react";
import styles from "./CodeJourney.module.css";
import { motion } from "framer-motion";

//pictures
import html from "./pictures/html.jpg";
import css from "./pictures/css.jpg";
import javascript from "./pictures/javascript.jpg";
import git from "./pictures/git.jpg";
import react from "./pictures/react.jpg";
import figma from "./pictures/figma.jpg";

const images = [
	{
		photo: html,
		name: "htmlLogo",
		description: "html",
	},
	{
		photo: css,
		name: "cssLogo",
		description: "css",
	},
	{
		photo: javascript,
		name: "javascriptLogo",
		description: "javascript",
	},
	{
		photo: git,
		name: "gitLogo",
		description: "git",
	},
	{
		photo: react,
		name: "reactLogo",
		description: "react",
	},
	{
		photo: figma,
		name: "figmaLogo",
		description: "figma",
	},
];
const CodeJourney = () => {
	return (
		<div className={styles.CodeJourney}>
			<div className={styles.CodeJourneyText}>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.8 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className={styles.sectionTitle}>
						My Journey
						<br /> Into <span>Code</span>
					</h2>
					<h3>
						It began with a conversation - one between best friends, continents
						apart. I was in Tokyo, the city I'd dreamt of for years. She was in
						California, encouraging me to try something new.
					</h3>
					<p>
						I dipped my toes into programming through playful, drag-and-drop
						lessons. But curiosity turned into passion. Before I knew it, I was
						deep in HTML, styling with CSS, writing logic with JavaScript, and
						now, diving into the world of React.
					</p>
					<p>
						By day, I work as a lobby assistant. By night, I code-chasing
						pixels, perfecting layouts, and learning what makes the web both
						beautiful and functional. When I'm not building website, you'll
						likely find me wandering Tokyo's vibrant streets, dancing in heels,
						or sipping coffee in tucked away cafes.
					</p>
				</motion.div>
			</div>
			<div className={styles.skills}>
				<h2>My Go-To Dev Kit</h2>
				<div className={styles.skillGrid}>
					{images.map((skill, index) => (
						<div key={index} className={styles.skillCard}>
							<img
								src={skill.photo}
								alt={skill.name}
								className={styles.skillIcon}
							/>
							<p>{skill.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CodeJourney;
