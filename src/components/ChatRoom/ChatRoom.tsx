import React from "react";
import {auth} from "../../firebase";
import {Button, Container, Form, Navbar, Image} from "react-bootstrap";
import sendIcon from '../../assets/icons/send_white_24dp.svg'

const ChatRoom: React.FC = () => {
	return (
			<section className="chat-room d-flex flex-column justify-content-between h-100">
				<Navbar bg="light">
					<Container>
						<Navbar.Brand>WeldChat</Navbar.Brand>
						<Button variant="outline-primary" size="sm" onClick={()=>{
							auth.signOut()
						}}> Log Out </Button>
					</Container>
				</Navbar>
						<Container className="d-flex flex-column" style={{ height: '100%', width:'100%', overflowY: 'auto' }}>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto,
								aut cupiditate deserunt ducimus eaque, excepturi facilis nesciunt non officiis
								quo quos ratione tempore, vel veniam? A aut corporis ratione.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto,
								aut cupiditate deserunt ducimus eaque, excepturi facilis nesciunt non officiis
								quo quos ratione tempore, vel veniam? A aut corporis ratione.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto,
								aut cupiditate deserunt ducimus eaque, excepturi facilis nesciunt non officiis
								quo quos ratione tempore, vel veniam? A aut corporis ratione.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto,
								aut cupiditate deserunt ducimus eaque, excepturi facilis nesciunt non officiis
								quo quos ratione tempore, vel veniam? A aut corporis ratione.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto,
								aut cupiditate deserunt ducimus eaque, excepturi facilis nesciunt non officiis
								quo quos ratione tempore, vel veniam? A aut corporis ratione.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto,
								aut cupiditate deserunt ducimus eaque, excepturi facilis nesciunt non officiis
								quo quos ratione tempore, vel veniam? A aut corporis ratione.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto,
								aut cupiditate deserunt ducimus eaque, excepturi facilis nesciunt non officiis
								quo quos ratione tempore, vel veniam? A aut corporis ratione.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto,
								aut cupiditate deserunt ducimus eaque, excepturi facilis nesciunt non officiis
								quo quos ratione tempore, vel veniam? A aut corporis ratione.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto,
								aut cupiditate deserunt ducimus eaque, excepturi facilis nesciunt non officiis
								quo quos ratione tempore, vel veniam? A aut corporis ratione.</p>
						</Container>
				<Navbar bg="light">
					<Container className="h-100">
						<Form className="d-flex justify-content-between align-items-center w-100">
							<Form.Group id="message" style={{ width: '100%', margin: '0' }}>
								<Form.Control type="text" placeholder="Your message..." required style={{ minHeight: '40px' }}/>
							</Form.Group>
							<Button className="ml-1" type="submit">
								<Image src={sendIcon}/>
							</Button>
						</Form>
					</Container>
				</Navbar>
			</section>
	);
}

export default ChatRoom;
