import React from "react";
import Projects from "../Projects/Projects";

import styles from "./ProjectsList.module.css";

const ProjectsList = ({ info }) => {
	return (
		<div className={styles.projectListWrapper}>
			<h1 className={styles.title}>My Recent Works</h1>
			<div className={styles.projectsGrid}>
				{info.map((project, index) => (
					<Projects
						key={project.name}
						index={index}
						src={project.src}
						name={project.name}
						category={project.category}
						projectLink={project.projectLink}
						details={project.details}
						github={project.github}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectsList;
