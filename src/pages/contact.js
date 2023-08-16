import React, { useState } from "react";
import './contact.css';

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a payload object with form data
        const payload = {
            name,
            email,
            message
        };
        setIsSending(true);
        try {
            const response = await fetch('/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                // Form submitted successfully
                // alert('Message sent successfully');
                setIsSent(true);
                setName('');
                setEmail('');
                setMessage('');
            } else {
                // Error occurred
                alert('An error occurred while sending the message');
            }


        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message');
        }
        setIsSending(false);
    };

    return (
        <div className="contactMainDiv" id="contact">
            <div className="contactMain">
                <div className="contactMeHeader">
                    <h2>Contact Me</h2>
                </div>
                <div className="contact-form-container">

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>

                        {isSending
                            ?
                            <div class="alert alert-info" role="alert">
                                Sending Message ......
                            </div>
                            :
                            null
                        }
                        {isSent
                            ?
                            <div class="alert alert-success" role="alert">
                                Message Has Been Sent.
                            </div>
                            :
                            null
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;