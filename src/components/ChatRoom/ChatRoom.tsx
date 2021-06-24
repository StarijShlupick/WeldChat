import React, {useRef, useState} from "react";
import {auth, firestore} from "../../firebase";
import {Button, Container, Form, Navbar, Image} from "react-bootstrap";
import sendIcon from '../../assets/icons/send_white_24dp.svg'
import { Scrollbars } from "react-custom-scrollbars-2";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase";
import Message from "../Message/Message";

const ChatRoom: React.FC = () => {
	const scrollToRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const messagesRef = firestore.collection('messages');
	const query = messagesRef.orderBy('createdAt').limit(25);
	const [messages] = useCollectionData(query, { idField: 'id' });
	const [formValue, setFormValue] = useState('');
	async function handleSubmit(e: { preventDefault: () => void; }) {
		e.preventDefault();
		// @ts-ignore
		const { uid } = auth.currentUser;
		await messagesRef.add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid
		})
		setFormValue('');
		scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
	}
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
				<Scrollbars>
					<Container className="d-flex flex-column" style={{ height: '100%', width:'100%'}}>
						{messages && messages.map(msg => <Message key={msg.id} message={msg} />)}
						<span ref={scrollToRef}/>
					</Container>
				</Scrollbars>
				<Navbar bg="light">
					<Container className="h-100">
						<Form className="d-flex justify-content-between align-items-center w-100" onSubmit={handleSubmit}>
							<Form.Group id="message" style={{ width: '100%', margin: '0' }}>
								<Form.Control
										type="text"
										placeholder="Your message..."
										required
										style={{ minHeight: '40px' }}
										value={formValue}
										onChange={(e) => setFormValue(e.target.value)}/>
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
