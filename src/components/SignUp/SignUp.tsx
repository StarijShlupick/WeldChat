import React, {useRef} from "react";
import { Form, Button } from 'react-bootstrap'
import {Link} from "react-router-dom";

const SignUp: React.FC = () => {
	const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const passwordConfirmRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	return (
		<>
				<Form>
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
					<Button className="w-100 mb-4" type="submit">Sign Up</Button>
				</Form>
			<div className="w-100 mt2 mb-4">
				Already have an account? <Link to="/login">Log In</Link>
			</div>
		</>
	);
}

export default SignUp;
