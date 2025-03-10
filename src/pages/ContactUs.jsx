import React, { useState, useEffect, useRef } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css";
import "../styles/Header.css";

const ContactUs = () => {
	// get form data
	const [formData, setFormData] = useState({
		name: "",
		contact: "",
		preferredTime: "",
		preferredComm: "",
	});

	const hasText = (value) => value.trim() !== ""; // icon color if has text
	const formRef = useRef(null); // position form
	const [isLoading, setIsLoading] = useState(false); // cursor loads when submit clicked

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleTimeSelect = (time) => {
		setFormData((prevData) => ({ ...prevData, preferredTime: time }));
	};

	const handleCommSelect = (comm) => {
		setFormData((prevData) => ({ ...prevData, preferredComm: comm }));
	};

	// Updated handlePhoneChange to accept the phone number string directly
	const handlePhoneChange = (value) => {
		setFormData((prevData) => ({
			...prevData,
			contact: value || "", // Update the state with the phone number or empty string
		}));
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
				toast.error(`Error sending the request to ${chatID}`);
				return false;
			}
			return true;
		} catch (error) {
			console.error("Error sending Telegram message:", error);
			toast.error("Failed to notify about your request.");
			return false;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true); // Start loading cursor

		const { name, contact, preferredTime, preferredComm } = formData;

		// Validate phone number
		if (!isValidPhoneNumber(contact)) {
			toast.error("Please enter a valid phone number.");
			setIsLoading(false);
			return;
		}

		const cleanedContact = contact.replace(/\D/g, ""); // Remove all non-digit characters for Telegram
		const formattedName = toTitleCase(name);

		const currentHour = new Date().getHours();
		let greeting =
			currentHour < 12
				? "Good morning"
				: currentHour < 17
					? "Good afternoon"
					: currentHour < 21
						? "Good evening"
						: "Good night";

		const timeDescriptions = {
			morning: "Morning (9 AM - 12 PM)",
			afternoon: "Afternoon (12 PM - 3 PM)",
			evening: "Evening (3 PM - 6 PM)",
		};

		const telegramMessage =
			`${greeting} 🌞, Gary Shrik! 🎉 You have a new order request:\n\n` +
			`✨ Name: ${formattedName}\n` +
			`📞 Contact: ${contact}\n` + // Use the formatted contact
			`💬 Preferred Communication: ${preferredComm ? preferredComm.charAt(0).toUpperCase() + preferredComm.slice(1) : "not specified"}\n` +
			`⏰ Preferred Time for a talk: ${preferredTime ? timeDescriptions[preferredTime] : "not specified"}\n\n` +
			`Please reach out to **${formattedName}** as soon as possible! 😊💖\n\nThank you for your wonderful service! 🥳`;

		const chatID = process.env.REACT_APP_CHAT_ID;
		const channelID = process.env.REACT_APP_CHANNEL_ID;

		const chatSuccess = await sendTelegramMessage(telegramMessage, chatID);
		if (chatSuccess) {
			const channelSuccess = await sendTelegramMessage(
				telegramMessage,
				channelID
			);
			if (channelSuccess) {
				toast.success(
					`Thanks, ${formattedName}! 😊\n📞 ${contact} | 💬 ${preferredComm ? preferredComm.charAt(0).toUpperCase() + preferredComm.slice(1) : "Not specified"} | ⏰ ${preferredTime ? timeDescriptions[preferredTime] : "Anytime"}\nWe'll be in touch soon! 💖`
				  );
				  
				  


				// Clear the form data after success
				setFormData({
					name: "",
					contact: "",
					preferredTime: "",
					preferredComm: "",
				});
			}
		}
		setIsLoading(false); // Stop loading cursor after alert is shown
	};
	

	useEffect(() => {
		if (window.location.hash === "#contactForm" && formRef.current) {
			formRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<div className="contact-body">
			{/* Add ToastContainer component here */}
			<ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
			
			<div
				className={`page-container transition-fade ${isLoading ? "loading-cursor" : ""}`}
			>
				<div className="Ellipse1" />
				<div className="Ellipse2" />
				<div className="">
					<div className="m-5">
						<div className="col-12">
							<h1 className="heading2">We'll Call You!</h1>
							<p className="text-center m-3 p-3">
								Leave us your contact details, <br />
								and we'll give you a call to help you with your
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
											(format: +1 715 555 0199)
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

										<PhoneInput
											international
											defaultCountry="US"
											value={formData.contact}
											onChange={handlePhoneChange}
											placeholder="Enter phone number"
											required
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
									disabled={isLoading} // Disable button when loading
								>
									{isLoading ? (
										<>
											<i className="fas fa-spinner fa-spin"></i>{" "}
											Processing...
										</>
									) : (
										<>
											<i className="fas fa-paper-plane"></i>{" "}
											Request a Call
										</>
									)}
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