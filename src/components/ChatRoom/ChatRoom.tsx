import React from "react";
import {auth} from "../../firebase";
import {Button, Card, Container, Form, Navbar} from "react-bootstrap";

const ChatRoom: React.FC = () => {
	return (
			<section className="chat-room d-flex flex-column justify-content-between h-100">
				<Navbar bg="light">
					<Container>
						<Navbar.Brand>WeldChat</Navbar.Brand>
						<Button size="sm" onClick={()=>{
							auth.signOut()
						}}> Log Out </Button>
					</Container>
				</Navbar>
				<Container className="d-flex justify-content-center align-items-center h-100">
					<Card style={{ height: '95%', width:'100%' }}>
						content
					</Card>
				</Container>
				<Navbar bg="light" style={{ minHeight: '10vh' }}>
					<Container className="h-100">
						<Form className="d-flex justify-content-between align-items-center w-100 h-100">
							<Form.Group id="message" style={{ width: '100%', margin: '0' }}>
								<Form.Control type="text" placeholder="Your message..." required/>
							</Form.Group>
							<Button type="submit" className="ml-2">Send</Button>
						</Form>
					</Container>
				</Navbar>
			</section>
	);
}

export default ChatRoom;
