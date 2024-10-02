import React, { useState, useEffect, useRef } from "react";
import Preloader from "../components/preloader"; // Assuming this is used elsewhere
import "../styles/Header.css";

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: "",
		contact: "",
		preferredTime: "",
		preferredComm: "", // Add this field to store the communication preference
	});

	const hasText = (value) => value.trim() !== "";
	const formRef = useRef(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleTimeSelect = (time) => {
		setFormData((prevData) => ({ ...prevData, preferredTime: time }));
	};

	const handleCommSelect = (comm) => {
		setFormData((prevData) => ({ ...prevData, preferredComm: comm })); // Update the preferred communication method
	};

	const toTitleCase = (str) => {
		return str
			.toLowerCase()
			.split(" ")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Remove all non-digit characters for cleanedContact
		const cleanedContact = formData.contact.replace(/\D/g, ""); // Remove all non-digit characters
		const formattedName = toTitleCase(formData.name); // Format name to title case

		// Send the data to Telegram
		const token = process.env.REACT_APP_BOT_TOKEN;
		const chatId = process.env.REACT_APP_CHAT_ID;

		// Get the current hour
		const currentHour = new Date().getHours();
		let greeting;

		// Determine the appropriate greeting based on the current hour
		if (currentHour < 12) {
			greeting = "Good morning";
		} else if (currentHour < 17) {
			greeting = "Good afternoon";
		} else if (currentHour < 21) {
			greeting = "Good evening";
		} else {
			greeting = "Good night"; // For late-night notifications
		}

		// Create a mapping of preferred times to their descriptions
		const timeDescriptions = {
			morning: "Morning (9 AM - 12 PM)",
			afternoon: "Afternoon (12 PM - 3 PM)",
			evening: "Evening (3 PM - 6 PM)",
		};

		// Construct the Telegram message
		const telegramMessage =
			`${greeting} 🌞, Gary Shrik! 🎉 You have a new order request:\n\n` +
			`✨ Name: ${formattedName}\n` + // Use the formatted name here
			`📞 Contact: +${cleanedContact}\n` + // Use cleanedContact without spaces
			`💬 Preferred Communication: ${formData.preferredComm ? formData.preferredComm.charAt(0).toUpperCase() + formData.preferredComm.slice(1) : "not specified"}\n` +
			`⏰ Preferred Time for a Call: ${formData.preferredTime ? timeDescriptions[formData.preferredTime] : "not specified"}\n\n` + // Use the mapping here
			`Please reach out to ${formattedName} as soon as possible! 😊💖\n\n` +
			`Thank you for your wonderful service! 🥳`;

		fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				chat_id: chatId,
				text: telegramMessage,
			}),
		})
			.then((response) => {
				if (response.ok) {
					// Same greeting logic here for the alert
					alert(
						`${greeting}, ${formattedName}! 😊\n\n` + // Use the formatted name here
							`Thank you for choosing us for your fire safety needs! 🔥🛡️\n\n` +
							`We have received your contact number: **+1 ${cleanedContact}**.\n` + // Use cleanedContact without spaces
							`You prefer to be contacted by **${formData.preferredComm ? formData.preferredComm.charAt(0).toUpperCase() + formData.preferredComm.slice(1) : "not specified"}**.\n` +
							`The best time for a call is **${formData.preferredTime ? timeDescriptions[formData.preferredTime] : "not specified"}**.\n\n` + // Use the mapping here
							`We’ll be in touch shortly! 💖`
					);

					// Reset form data
					setFormData({
						name: "",
						contact: "",
						preferredTime: "",
						preferredComm: "",
					});
				} else {
					alert(
						"There was an error sending your request. Please try again."
					);
				}
			})
			.catch((error) => {
				console.error("Error sending Telegram message:", error);
				alert("Failed to notify about your request.");
			});
	};

	useEffect(() => {
		if (window.location.hash === "#contactForm" && formRef.current) {
			formRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<div className="contact-body">
			<div className="page-container transition-fade">
				<div className="Ellipse1" />
				<div className="Ellipse2" />
				<div className="">
					<div className="m-5">
						<div className="col-12">
							<h1 className="heading2">We’ll Call You!</h1>
							<p className="text-center m-3 p-3">
								Leave us your contact details, <br />
								and we’ll give you a call to help you with your
								purchase.
							</p>
						</div>
						<div className="contact-info text-center">
							<form id="contactForm" onSubmit={handleSubmit}>
								<div className="form-group">
									<label htmlFor="name">
										Tell us your FIRST and LAST NAME
									</label>
									<div className="input-container">
										<i
											className={`fas fa-user ${
												hasText(formData.name)
													? "icon-red"
													: ""
											}`}
										></i>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											placeholder="John Doe"
											required
										/>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="contact">
										Your Contact Number
										<span className="sample-number">
											{" "}
											(sample: +1 715 555 0199)
										</span>
									</label>
									<div className="input-container">
										<i
											className={`fas fa-phone-alt ${
												hasText(formData.contact)
													? "icon-red"
													: ""
											}`}
										></i>
										<input
											type="tel"
											id="contact"
											name="contact"
											value={formData.contact}
											onChange={(e) => {
												const inputValue =
													e.target.value;

												let formattedValue =
													inputValue.replace(
														/[^\d]/g,
														""
													);

												if (
													!formattedValue.startsWith(
														"1"
													)
												) {
													formattedValue =
														"1" + formattedValue;
												}

												let phoneNumber = "+1 ";
												if (formattedValue.length > 1) {
													phoneNumber +=
														formattedValue.slice(
															1,
															4
														);
												}
												if (formattedValue.length > 4) {
													phoneNumber +=
														" " +
														formattedValue.slice(
															4,
															7
														);
												}
												if (formattedValue.length > 7) {
													phoneNumber +=
														" " +
														formattedValue.slice(
															7,
															11
														);
												}

												if (
													formattedValue.length <= 11
												) {
													setFormData((prevData) => ({
														...prevData,
														contact:
															phoneNumber.trim(),
													}));
												}
											}}
											placeholder="+1 800 555 0199"
											required
											pattern="^\+1 [0-9]{3} [0-9]{3} [0-9]{4}$"
											inputMode="numeric"
											onFocus={(e) => {
												if (e.target.value === "") {
													e.target.value = "+1 ";
												}
											}}
											onBlur={(e) => {
												if (e.target.value === "+1 ") {
													e.target.value = "";
												}
											}}
											onKeyPress={(e) => {
												if (
													!/^[0-9]$/.test(e.key) &&
													e.key !== "Backspace"
												) {
													e.preventDefault();
												}
											}}
										/>
									</div>
								</div>

								<div className="form-group">
									<label>
										Preferred Means of Communication:
									</label>
									<div className="chip-container">
										<div
											className={`chip ${formData.preferredComm === "call" ? "chip-selected" : ""}`}
											onClick={() =>
												handleCommSelect("call")
											}
										>
											<i className="fas fa-phone"></i>{" "}
											Call
										</div>
										<div
											className={`chip ${formData.preferredComm === "text" ? "chip-selected" : ""}`}
											onClick={() =>
												handleCommSelect("text")
											}
										>
											<i className="fas fa-message"></i>{" "}
											Text
										</div>
									</div>
								</div>

								<div className="form-group">
									<label>Preferred Time for a Talk:</label>
									<div className="chip-container">
										<div
											className={`chip ${formData.preferredTime === "morning" ? "chip-selected" : ""}`}
											onClick={() =>
												handleTimeSelect("morning")
											}
										>
											<i className="fas fa-sun"></i>{" "}
											Morning (9 AM - 12 PM)
										</div>
										<div
											className={`chip ${formData.preferredTime === "afternoon" ? "chip-selected" : ""}`}
											onClick={() =>
												handleTimeSelect("afternoon")
											}
										>
											<i className="fas fa-cloud-sun"></i>{" "}
											Afternoon (12 PM - 3 PM)
										</div>
										<div
											className={`chip ${formData.preferredTime === "evening" ? "chip-selected" : ""}`}
											onClick={() =>
												handleTimeSelect("evening")
											}
										>
											<i className="fas fa-moon"></i>{" "}
											Evening (3 PM - 6 PM)
										</div>
									</div>
									<p className="text-center m-3 p-3">
										We value your time and will make the
										process as easy as possible. <br />
										No complicated forms, just a quick call
										to assist you!
									</p>
									<div className="submit-btn-container">
										<button
											type="submit"
											className="submit-buyer-info-btn"
										>
											<i className="fas fa-paper-plane"></i>{" "}
											Request a Call
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="container ">
					<div className="glass">
						<p className="text-center mb-5">
							Not comfortable filling out a form? <br />
							Call us directly and we’ll be happy to assist you!
						</p>
						<div className="col-12 text-center">
							<div className="mb-4">
								<h1 className="heading2">REACH OUT TO US</h1>
							</div>
						</div>

						<div class="contact-info text-center">
							<div class="row contact-line">
								<div class="col-sm-12 col-md-3 d-flex justify-content-center phone">
									<span class="bolded-red-text">Phone:</span>
									<a
										href="tel:+17159229042"
										class="phone-link"
									>
										(715) 922-9042
									</a>
								</div>
								<div class="col-sm-12 col-md-3 d-flex justify-content-center fax">
									<span class="bolded-red-text">Fax:</span>

									<a
										href="tel:+17154074610"
										class="phone-link"
									>
										(715) 407-4610
									</a>
								</div>
							</div>
							<p class="email mt-3">
								<span class="bolded-red-text">Email:</span>
								<a
									href="mailto:office@fireprowi.com"
									class="email-link"
								>
									office@fireprowi.com
								</a>
							</p>

							<p class="address mt-4">
								<span class="bolded-red-text">Location:</span>
								<a
									href="https://www.google.com/maps/search/?api=1&query=N10936+St.+Hwy+73+Greenwood+WI+54437"
									class="address-link"
									target="_blank"
								>
									N10936 St. Hwy 73 Greenwood WI 54437
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
