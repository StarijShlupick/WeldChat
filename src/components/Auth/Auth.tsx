import React from "react";
import {Card, Container} from "react-bootstrap";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

const Auth: React.FC = () => {
	return (
			<Router>
				<Container className="d-flex align-items-center justify-content-center h-100" style={{ minHeight: "100vh" }}>
					<div className="w-100" style={{ maxWidth: "400px" }}>
						<Card className="shadow mt-2 mb-4" style={{padding: "0px 10px"}}>
							<Card.Body>
								<Switch>
									<Route path="/signup">
										<h2 className="text-center mb-4">Sign Up</h2>
									</Route>
									<Route path="/login">
										<h2 className="text-center mb-4">Log In</h2>
									</Route>
								</Switch>
							</Card.Body>
							<Switch>
								<Route path="/signup">
									<SignUp/>
								</Route>
								<Route path="/login">
									<LogIn/>
								</Route>
							</Switch>
						</Card>
					</div>
				</Container>
			</Router>
	);
}

export default Auth;
