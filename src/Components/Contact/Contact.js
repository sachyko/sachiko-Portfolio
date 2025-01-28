import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
		<div className={styles.contactContainer}>
			<div className={styles.contactText}>
				<h1>"Let's Connect, Collaborate, and Create Together!"</h1>
				<p>
					"I'm Sachiko Ponpon - an aspiring developer based in Tokyo, passionate
					about creating meaningful digital experiences and bring innovative
					ideas to life, while constantly learning and growing in the tech
					world"
				</p>
				<p>
					"Reach out today, and together, we’ll connect, collaborate, and create
					something amazing."
				</p>
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
	);
};

export default Contact;
