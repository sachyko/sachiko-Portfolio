import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "./AboutMe.module.css";

//picture
import me from "./picture/sachiko.jpg";

const AboutMe = () => {
	const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.7,
	});
	return (
		<div className={styles.aboutme} ref={ref}>
			<img src={me} alt="woman" />
			<div className={styles.aboutmeInfo}>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1 }}
				>
					{" "}
					Hi, I'm Sachiko Ponpon
				</motion.h1>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1, delay: 0.5 }}
				>
					A girl living in her dream country, Tokyo!
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1, delay: 1 }}
				>
					I stumbled upon programming after talking with my bestfriend in
					California. I started with drag and drop code lessons to try if this
					was something I'd like to pursue in the future. Little did I know, I
					immersed myself in HTML, CSS, JavaScript and now learning React. I
					work as a lobby assistant throughout the day and study web development
					at night. When I'm not coding, you’ll find me exploring Tokyo’s
					vibrant streets, going to heels dance classes, or finding hidden
					aesthetic cafes. But really, nice to meet you!
				</motion.p>
			</div>
		</div>
	);
};

export default AboutMe;
