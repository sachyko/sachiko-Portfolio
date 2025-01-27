import React from "react";
import styles from "./Projects.module.css";

const Projects = ({ src, name, category, details, projectLink, github }) => {
	return (
		<div className={styles.projects}>
			{/* website 1- Ravenous */}
			<figure className={styles.projectsContainer}>
				<a href={projectLink} target="_blank" rel="noopener noreferrer">
					<img src={src} alt={name} />
				</a>
				<figcaption className={styles.info}>
					<h1>{name}</h1>
					<h2>{category}</h2>
					<p>"{details}"</p>
					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.button}
					>
						Git Page
					</a>
				</figcaption>
			</figure>

			{/* website 2- My Language Friends */}
		</div>
	);
};

export default Projects;
