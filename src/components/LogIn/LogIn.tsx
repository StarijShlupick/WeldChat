import React, {useEffect, useRef, useState} from "react";
import {Alert, Button, Card, Form} from 'react-bootstrap'
import {login} from "../../firebase";
import {authSignUpMode} from "../../features/actions";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {EThemeMode} from "../../features/types";

const LogIn: React.FC = () => {
	const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const componentIsMounted = useRef(true);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const themeMode = useAppSelector((state) => state.ThemeModeReducer);
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
				<Card className="shadow mt-2 mb-4" style={{padding: "0px 15px"}}
							bg={themeMode === EThemeMode.light ? 'light' : 'dark'}
							text={themeMode === EThemeMode.light ? 'dark' : 'light'}>
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
						<Button className="w-100 mb-4" type="submit" disabled={loading}
										variant={themeMode === EThemeMode.light ? 'primary' : 'outline-light'}>Log In</Button>
					</Form>
					<div className="w-100 mt2 mb-4">
						Need an account? <span className={themeMode === EThemeMode.light ? "text-primary" : 'text-light'}
																	 onClick={() => {
																		 dispatch(authSignUpMode())
																	 }}
																	 style={{cursor: "pointer"}}><u>Sign Up</u></span>
					</div>
				</Card>
			</section>
	);
}

export default LogIn;
