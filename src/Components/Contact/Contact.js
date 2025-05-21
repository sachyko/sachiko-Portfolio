import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Navigation from "../Navigation/Navigation";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";

const Contact = () => {
	//step 1: define form data
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [error, setError] = useState(""); //for error messages

	//step 2: Handle input changes to update state

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	useEffect(() => {
		const textarea = document.getElementById("message");
		textarea.style.height = "auto"; // Reset the height
		textarea.style.height = `${textarea.scrollHeight}px`; // Set to the scroll height (auto expand)
	}, [formData.message]); // Trigger when message changes

	//Step 3: Handle form submission

	const handleSubmit = (e) => {
		e.preventDefault(); //Prevent the page from refreshing on form submit

		//EmailJs template and user info

		const templateParams = {
			name: formData.name,
			email: formData.email,
			message: formData.message,
		};

		//Send email using Emailjs
		emailjs
			.send(
				"service_5ya3ibd", //service Id
				"template_39a9qpa", //template Id
				templateParams, //the form data
				"8hUOtcEaVhJATgjd-" //public user Id
			)
			.then(
				(response) => {
					console.log("Email sent successfully", response);
					alert("Your message has been sent!");

					//clear the form after successful submision
					setFormData({ name: "", email: "", message: "" });
					setError(""); //clear any error messages
				},
				(err) => {
					console.log("Failed to sent email", err);
					alert("Oops, something went wrong. Please try again");
				}
			);
	};

	return (
		<div className={styles.contactWrapper}>
			<div className={styles.contactContainer}>
				<div className={styles.contactText}>
					<h1>"Let's Connect, Collaborate, and Create Together!"</h1>
					<p>
						"A front-end web developer with a keen eye for design, bringing
						ideas to life through clean, responsive, and visually engaging
						websites."
					</p>
					<p>
						"Let's build something exceptional. Reach out anytime, I'll be in
						touch soon."
					</p>
					<div className={styles.socialContainer}>
						<ul className={styles.social}>
							<li className={styles.gmail}>
								<i
									className="fa-sharp fa-solid fa-envelope"
									style={{ color: "#ac746a " }}
								></i>
								ponponsachiko23@gmail.com
							</li>
							<li>
								<i
									className="fa-brands fa-github"
									style={{ color: "#ac746a " }}
								></i>
								<a
									href="https://github.com/sachyko"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github
								</a>
							</li>
							<li>
								<i
									className="fa-brands fa-linkedin"
									style={{ color: "#ac746a " }}
								></i>
								<a
									href="https://www.linkedin.com/in/sachiko-ponpon-1142791b7/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Linkedin
								</a>
							</li>
						</ul>
					</div>
					<Link to="/" className={styles.button}>
						Back to Home
					</Link>
				</div>

				<div className={styles.formContainer}>
					<h2>Contact Us</h2>
					<form onSubmit={handleSubmit} className="contact-form">
						{/* Error message */}
						{error && <div className="error-message">{error}</div>}

						{/* Name input */}
						<div className={styles.formgroup}>
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								autoComplete="name"
							/>
						</div>

						{/* Email input */}
						<div className={styles.formgroup}>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								autoComplete="email"
							/>
						</div>

						{/* Message input */}
						<div className={styles.formgroup}>
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
							></textarea>
						</div>

						{/* Submit Button */}
						<button type="submit" className={styles.submit}>
							Submit Now
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
