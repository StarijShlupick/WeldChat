import React, {useRef, useState} from "react";
import {Form, Button, Alert, Card} from 'react-bootstrap'
import {signup} from "../../firebase";
import {useAppDispatch} from "../../app/hooks";
import {authLogInMode} from "../../features/actions";

const SignUp: React.FC = () => {
	const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const passwordConfirmRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const dispatch = useAppDispatch()
	async function handleSubmit(e: { preventDefault: () => void; }) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match')
		}
		try {
			setError('')
			setLoading(true)
			await signup(emailRef.current.value, passwordRef.current.value)
		} catch {
			setError('Failed to create an accoutn')
		}
		setLoading(false)
		dispatch(authLogInMode())
	}
	return (
		<section className="sign-up">
			<Card className="shadow mt-2 mb-4" style={{padding: "0px 15px"}}>
				<Card.Body>
					<h2 className="text-center mb-4">Sign Up</h2>
				</Card.Body>
				<Form onSubmit={handleSubmit}>
					{/*<Form.Group id="name">*/}
					{/*	<Form.Label>*/}
					{/*		Name*/}
					{/*	</Form.Label>*/}
					{/*	<Form.Control type="text" required/>*/}
					{/*</Form.Group>*/}
					<Form.Group id="email">
						<Form.Label>
							Email
						</Form.Label>
						<Form.Control type="email" ref={emailRef} required/>
					</Form.Group>
					<Form.Group id="password">
						<Form.Label>
							Password
						</Form.Label>
						<Form.Control type="password" ref={passwordRef} required/>
					</Form.Group>
					<Form.Group id="password-confirm">
						<Form.Label>
							Confirm password
						</Form.Label>
						<Form.Control type="password" ref={passwordConfirmRef} required/>
					</Form.Group>
					{error && <Alert variant="danger">{error}</Alert>}
					<Button className="w-100 mb-4" type="submit" disabled={loading}>Sign Up</Button>
				</Form>
				<div className="w-100 mt2 mb-4">
					Already have an account? <Button variant="link" onClick={() => {
					dispatch(authLogInMode())}}>Log In</Button>
				</div>
				</Card>
		</section>
	);
}

export default SignUp;
