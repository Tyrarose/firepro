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

	const sendTelegramMessage = async (telegramMessage, chatID) => {
		const botToken = process.env.REACT_APP_BOT_TOKEN;
		const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

		const payload = {
			chat_id: chatID,
			text: telegramMessage,
		};

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				const errorData = await response.json();
				console.error("Telegram API Error:", errorData);
				alert(`Error sending the request to ${chatID}`);
				return false;
			}
			return true;
		} catch (error) {
			console.error("Error sending Telegram message:", error);
			alert("Failed to notify about your request.");
			return false;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const cleanedContact = formData.contact.replace(/\D/g, ""); // Remove all non-digit characters
		const formattedName = toTitleCase(formData.name); // Format name to title case

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
			`✨ Name: ${formattedName}\n` +
			`📞 Contact: +${cleanedContact}\n` +
			`💬 Preferred Communication: ${
				formData.preferredComm
					? formData.preferredComm.charAt(0).toUpperCase() +
						formData.preferredComm.slice(1)
					: "not specified"
			}\n` +
			`⏰ Preferred Time for a Call: ${
				formData.preferredTime
					? timeDescriptions[formData.preferredTime]
					: "not specified"
			}\n\n` +
			`Please reach out to ${formattedName} as soon as possible! 😊💖\n\n` +
			`Thank you for your wonderful service! 🥳`;

		// Send the message to the chat and then to the channel
		const chatID = process.env.REACT_APP_CHAT_ID;
		const channelID = process.env.REACT_APP_CHANNEL_ID;

		const chatSuccess = await sendTelegramMessage(telegramMessage, chatID);
		if (chatSuccess) {
			const channelSuccess = await sendTelegramMessage(
				telegramMessage,
				channelID
			);
			if (channelSuccess) {
				alert(
					`${greeting}, ${formattedName}! 😊\n\n` +
						`Thank you for choosing us for your fire safety needs! 🔥🛡️\n\n` +
						`We have received your contact number: +${cleanedContact}.\n` +
						`You prefer to be contacted by ${
							formData.preferredComm
								? formData.preferredComm
										.charAt(0)
										.toUpperCase() +
									formData.preferredComm.slice(1)
								: "not specified"
						}.\n` +
						`The best time for a call is ${
							formData.preferredTime
								? timeDescriptions[formData.preferredTime]
								: "not specified"
						}.\n\n` +
						`We’ll be in touch shortly! 💖`
				);
			}
		}
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
							<form
								id="contactForm"
								onSubmit={handleSubmit}
								ref={formRef}
							>
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
											onChange={handleChange}
											placeholder="+1 800 555 0199"
											required
											pattern="^\+1 [0-9]{3} [0-9]{3} [0-9]{4}$"
											inputMode="numeric"
										/>
									</div>
								</div>

								<div className="form-group">
									<label>
										Preferred Means of Communication:
									</label>
									<div className="chip-container">
										<div
											className={`chip ${
												formData.preferredComm ===
												"call"
													? "chip-selected"
													: ""
											}`}
											onClick={() =>
												handleCommSelect("call")
											}
										>
											<i className="fas fa-phone"></i>{" "}
											Call
										</div>
										<div
											className={`chip ${
												formData.preferredComm ===
												"text"
													? "chip-selected"
													: ""
											}`}
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
											className={`chip ${
												formData.preferredTime ===
												"morning"
													? "chip-selected"
													: ""
											}`}
											onClick={() =>
												handleTimeSelect("morning")
											}
										>
											<i className="fas fa-sun"></i>{" "}
											Morning (9 AM - 12 PM)
										</div>
										<div
											className={`chip ${
												formData.preferredTime ===
												"afternoon"
													? "chip-selected"
													: ""
											}`}
											onClick={() =>
												handleTimeSelect("afternoon")
											}
										>
											<i className="fas fa-cloud-sun"></i>{" "}
											Afternoon (12 PM - 3 PM)
										</div>
										<div
											className={`chip ${
												formData.preferredTime ===
												"evening"
													? "chip-selected"
													: ""
											}`}
											onClick={() =>
												handleTimeSelect("evening")
											}
										>
											<i className="fas fa-cloud-moon"></i>{" "}
											Evening (3 PM - 6 PM)
										</div>
									</div>
								</div>

								<button
									type="submit"
									className="submit-buyer-info-btn"
								>
									<i className="fas fa-paper-plane"></i>{" "}
									Request a Call
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
