import React from "react";
import {Container} from "react-bootstrap";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import {useAppSelector} from "../../app/hooks";
import {EAuthMode} from "../../features/types";

const Auth: React.FC = () => {
	const authMode = useAppSelector((state) => state.AuthReducer)
	return (
			<section className="auth">
				<Container className="d-flex align-items-center justify-content-center h-100" style={{ minHeight: "100vh" }}>
					<div className="w-100" style={{ maxWidth: "400px" }}>
						{authMode === EAuthMode.signup ? (
								<SignUp/>
						) : (
								''
						)}
						{authMode === EAuthMode.login ? (
								<LogIn/>
						) : (
								''
						)}
					</div>
				</Container>
			</section>
	);
}

export default Auth;
