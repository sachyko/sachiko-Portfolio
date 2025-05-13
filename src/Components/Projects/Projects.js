import React from "react";
import styles from "./Projects.module.css";

const Projects = ({
	src,
	name,
	category,
	details,
	projectLink,
	github,
	index,
}) => {
	const cardStyle = index % 2 === 0 ? styles.lightCard : styles.darkCard;
	return (
		<div className={`${styles.card} ${cardStyle}`}>
			<a href={projectLink} target="_blank" rel="noopener noreferrer">
				<img src={src} alt={name} className={styles.image} />
			</a>
			<div className={styles.text}>
				<h2 className={styles.name}>{name}</h2>
				<h3 className={styles.category}>{category}</h3>
				<p className={styles.details}>{details}</p>
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.button}
				>
					Github
				</a>
			</div>
		</div>
	);
};

export default Projects;
