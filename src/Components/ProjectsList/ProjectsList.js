import React from "react";
import Projects from "../Projects/Projects";

import styles from "./ProjectsList.module.css";

// src: { ravenousImg },
// 		name: "Ravenous",
// 		category: "Restaurant Recommendation App",
// 		projectLink: "https://sachyko.github.io/ravenous/",
// 		details:
const ProjectsList = ({ info }) => {
	return (
		<div className={styles.background}>
			<div className={styles.projectsList}>
				<h1 className={styles.title}>My Recent Works</h1>
				<div className={styles.projectsListContainer}>
					{info.map((info) => (
						<Projects
							key={info.name}
							src={info.src}
							name={info.name}
							category={info.category}
							projectLink={info.projectLink}
							details={info.details}
							github={info.github}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectsList;
