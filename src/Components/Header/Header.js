import React from "react";
import girlcode from "./picture/girlscode.jpg";
import styles from "./Header.module.css";
const Header = () => {
	return (
		<div className={styles.header}>
			<h2>Exploring my creativity through code</h2>
			<img src={girlcode} alt="code and girly things" />
		</div>
	);
};

export default Header;
