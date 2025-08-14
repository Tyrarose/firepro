import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify'; // Ensure you have react-toastify installed

export default function Tyra() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            email: email,
            message: message,
        };

        emailjs.send('service_m87pzh8', 'template_fs9pvdg', templateParams, 'auQR37PVzYQYIua2_')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                toast.success('Message sent successfully!');
                setEmail('');
                setMessage('');
            })
            .catch((err) => {
                console.error('Failed to send email. Error:', err);
                toast.error('Failed to send message. Please try again.');
            });
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto rounded-lg p-8">
                {/* About the Developer */}
                <h1 className="text-4xl font-bold text-[--brand-red] mb-6">About the Developer</h1>
                <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                    Hi, I'm <strong className="text-[--brand-red]">Tyra Clemente</strong>, the developer behind <span className="font-semibold">FlameOutSolutions</span>.
                    As a passionate and detail-oriented freelance developer, I specialize in crafting fast, 
                    scalable, and user-friendly web applications. My goal is to create digital experiences that 
                    not only function seamlessly but also deliver value to users.
                </p>

                {/* Company Feedback */}
                <h2 className="text-3xl font-semibold text-[--brand-red] mt-8 mb-4">Company Feedback</h2>
                <blockquote className="text-gray-700 text-lg italic border-l-4 border-[--brand-red] pl-4 mb-6">
                    "<strong className="text-[--brand-red]">Tyra Clemente</strong> has been instrumental in bringing our vision to life. 
                    Her dedication to crafting a seamless user experience and ensuring our website runs efficiently has been invaluable.
                    We appreciate her expertise, responsiveness, and innovative approach in making 
                    FlameOutSolutions a trusted platform for fire safety solutions."
                </blockquote>

                {/* Developer Experience */}
                <h2 className="text-3xl font-semibold text-[--brand-red] mt-8 mb-4">Developer Experience</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Working with <span className="font-semibold">FlameOutSolutions</span> has been an incredible experience. Their commitment to fire safety 
                    solutions and innovation made this project a rewarding challenge. I'm grateful for the opportunity 
                    to contribute to their mission of protecting homes and businesses.
                </p>

                {/* Collaboration Section */}
                <h2 className="text-3xl font-semibold text-[--brand-red] mt-8 mb-4">Let's Build Something Great</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    I'm always open to new projects and collaborations. If you're looking for a skilled and dedicated 
                    developer for your next idea, feel free to reach out!
                </p>

                {/* Contact & Links */}
                <h2 className="text-3xl mt-8 mb-4">Connect with Me</h2>
                <div className="d-flex flex-column flex-sm-row mb-6 gap-3">
                    <a href="https://tyragenerose.top" 
                        className="btn text-decoration-none d-flex align-items-center gap-2">
                        <i className="fas fa-globe"></i> View My Portfolio
                    </a>

                    <a href="https://www.linkedin.com/in/tyraclemente/" 
                        className="btn text-decoration-none d-flex align-items-center gap-2">
                        <i className="fab fa-linkedin"></i> Connect on LinkedIn
                    </a>
                </div>


                {/* Quick Email Contact */}
                <h2 className="text-3xl font-semibold text-[--brand-red] mt-8 mb-4">Quick Contact</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email Address</label>
                        <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Your Message</label>
                        <textarea
                        placeholder="Write your message here..."
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-control"
                        required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-dark w-100">
                        Send Message
                    </button>
                </form>

            </div>
        </div>
    );
}