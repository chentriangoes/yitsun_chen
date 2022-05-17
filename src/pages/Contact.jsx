import React from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import "./Contact.css"

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
	};

	return (
<div className="contact">

<h1 className="contact-me">Contact Me</h1>
          <div className="form-container">
		  <Container>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='type-text' controlId='name'>
						<Form.Label>Name</Form.Label>
						<div>
						<Form.Control
						    className='input-box'
							required
							name="name"
							value={name}
							type='text'
							placeholder='My Name'
							onChange={(e) => {
								updateFormState(setName, e);
							}}
						/>
						</div>

					</Form.Group>
					<Form.Group className='type-text' controlId='email'>
						<Form.Label>Email address</Form.Label>
						<div>
						<Form.Control
						className='input-box'
							required
							name="email"
							value={email}
							type='email'
							placeholder='email@email.com'
							onChange={(e) => {
								updateFormState(setEmail, e);
							}}
						/>
						</div>
					</Form.Group>
					<Form.Group className='type-text' controlId='subject'>
						<Form.Label>Message Subject</Form.Label>
						<div>
						<Form.Control
						className='input-box'
							required
							name="subject"
							value={subject}
							type='subject'
							placeholder='Subject'
							onChange={(e) => {
								updateFormState(setSubject, e);
							}}
						/>
						</div>
					</Form.Group>
					<Form.Group className='type-text' controlId='message'>
						<Form.Label>Message</Form.Label>
						<div>
						<Form.Control
						className='input-box'
							required
							name="message"
							value={message}
							as='textarea'
                            placeholder='My Message'
							rows={3}
							onChange={(e) => {
								updateFormState(setMessage, e);
							}}
						/>
						</div>
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
						className='alert'
					>
						Message Sent, Thank You!
					</Alert>
				)}
				{errorMessage && (
					
					<Alert
						className='alert'
						/*change style plase */
					>
						Oooops, an Error! Please Send Me an Email to chentriangle@gmail.com instead!
					</Alert>
				)}
			</Container>
          </div>




		</div>
	);
}
