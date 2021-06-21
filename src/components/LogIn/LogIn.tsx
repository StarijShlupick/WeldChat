import React, {useRef} from "react";
import { Form, Button } from 'react-bootstrap'
import {Link} from "react-router-dom";

const LogIn: React.FC = () => {
	const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	return (
		<>
				<Form>
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
					<Button className="w-100 mb-4" type="submit">Log In</Button>
				</Form>
			<div className="w-100 mt2 mb-4">
				Need an account? <Link to="/signup">Sign Up</Link>
			</div>
		</>
	);
}

export default LogIn;
