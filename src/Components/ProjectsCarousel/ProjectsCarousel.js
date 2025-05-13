import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Projects from "../Projects/Projects";
import styles from "./ProjectsCarousel.module.css";

const ProjectsCarousel = ({ info }) => {
	const [current, setCurrent] = useState(0);
	const [fade, setFade] = useState(true);

	const handleChange = (direction) => {
		setFade(false);
		setTimeout(() => {
			setCurrent((prev) =>
				direction === "next"
					? (prev + 1) % info.length
					: (prev - 1 + info.length) % info.length
			);
			setFade(true);
		}, 300);
	};
	return (
		<div className={styles.carouselWrapper}>
			<h2 className={styles.title}>My Web Development Projects</h2>
			<div className={styles.carouselRow}>
				<button onClick={() => handleChange("prev")} className={styles.arrow}>
					<FaArrowLeft />
				</button>

				<div
					className={`${styles.cardWrapper} ${
						fade ? styles.fadeIn : styles.fadeOut
					}`}
				>
					<Projects {...info[current]} index={current} />
				</div>

				<button onClick={() => handleChange("next")} className={styles.arrow}>
					<FaArrowRight />
				</button>
			</div>
		</div>
	);
};

export default ProjectsCarousel;
