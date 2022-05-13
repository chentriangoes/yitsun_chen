import React from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Alert, Container } from 'react-bootstrap';
//import "./Contact.css"

export default function Contact() {
    
	const [messageSent, renderMessageSent] = useState(false);
	const [errorMessage, renderErrorMessage] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const updateFormState = (state, e) => {
		state(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const sendEmail = await emailjs.sendForm(
			'yitsun_chen_contact', 
			'template_8zp4z99', 
			e.target, 
			'jnoGqkWdlUJKjbBLx'
			)

		sendEmail.status === 200
			? renderMessageSent(true)
			: renderErrorMessage(true);

		setName('');
		setEmail('');
		setMessage('');
		setSubject('');
	};

	const styles = {
		border: {
			borderColor: '#e8f2f1',
		},
		buttonColour: {
			background: '#5e7e7c',
		},
		heading: {
			fontSize: '5rem',
		},
	};

	return (
		<>
			<Container>
				<h2 style={styles.heading}>Contact Me</h2>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							required
							name="name"
							value={name}
							type='text'
							placeholder='Harry Potter'
							onChange={(e) => {
								updateFormState(setName, e);
							}}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='email'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							required
							name="email"
							value={email}
							type='email'
							placeholder='email@email.com'
							onChange={(e) => {
								updateFormState(setEmail, e);
							}}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='subject'>
						<Form.Label>Message Subject</Form.Label>
						<Form.Control
							required
							name="subject"
							value={subject}
							type='subject'
							placeholder='Subject'
							onChange={(e) => {
								updateFormState(setSubject, e);
							}}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='message'>
						<Form.Label>Message</Form.Label>
						<Form.Control
							required
							name="message"
							value={message}
							as='textarea'
                            placeholder='Message'
							rows={3}
							onChange={(e) => {
								updateFormState(setMessage, e);
							}}
						/>
					</Form.Group>
					<Button
						type='submit'
						variant='success'
						style={{ ...styles.buttonColour, ...styles.border }}
					>
						Send Message
					</Button>
				</Form>
				{messageSent && (
					<Alert
						className='my-3 text-white'
						style={{ ...styles.buttonColour, ...styles.border }}
					>
						Message Sent!
					</Alert>
				)}
				{errorMessage && (
					<Alert
						className='my-3 text-white'
						style={{ ...styles.buttonColour, ...styles.border }}
					>
						Error sending email!
					</Alert>
				)}
			</Container>
		</>
	);
}
