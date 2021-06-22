import React, {useEffect, useRef, useState} from "react";
import {Form, Button, Alert, Card} from 'react-bootstrap'
import {login} from "../../firebase";
import {authSignUpMode} from "../../features/actions";
import {useAppDispatch} from "../../app/hooks";

const LogIn: React.FC = () => {
	const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const componentIsMounted = useRef(true);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const dispatch = useAppDispatch()
	useEffect(() => {
		return () => {
			componentIsMounted.current = false;
		}
	}, [])
	async function handleSubmit(e: { preventDefault: () => void; }) {
		e.preventDefault();
		try {
				setError('')
				setLoading(true)
			await login(emailRef.current.value, passwordRef.current.value)
		} catch {
			setError('Failed to log in')
		}
		if (componentIsMounted.current) {
			setLoading(false)
		}
	}
	return (
		<section className="login">
			<Card className="shadow mt-2 mb-4" style={{padding: "0px 15px"}}>
				<Card.Body>
					<h2 className="text-center mb-4">Log In</h2>
				</Card.Body>
				<Form onSubmit={handleSubmit}>
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
					{error && <Alert variant="danger">{error}</Alert>}
					<Button className="w-100 mb-4" type="submit" disabled={loading}>Log In</Button>
				</Form>
				<div className="w-100 mt2 mb-4">
					Need an account? <Button variant="link" onClick={() => {
					dispatch(authSignUpMode())}}>Sign Up</Button>
				</div>
			</Card>
		</section>
	);
}

export default LogIn;
