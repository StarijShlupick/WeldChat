import React, {useEffect, useRef, useState} from "react";
import {auth, firestore} from "../../firebase";
import {Button, Container, Form, Navbar, Image, Spinner} from "react-bootstrap";
import sendIcon from '../../assets/icons/send_white_24dp.svg'
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase";
import Message from "../Message/Message";
import {useAuthState} from "react-firebase-hooks/auth";

const ChatRoom: React.FC = () => {
	const scrollToRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const messagesRef = firestore.collection('messages');
	const query = messagesRef.orderBy('createdAt').limitToLast(30);
	const [messages, loading] = useCollectionData(query, { idField: 'id' });
	const [formValue, setFormValue] = useState('');
	const [user] = useAuthState(auth);
	const scrollToNewMessages = () => {
		scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
	}
	async function handleSubmit(e: { preventDefault: () => void; }) {
		e.preventDefault();
		const uid = user?.uid;
		await messagesRef.add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid
		})
		setFormValue('');
		scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
	}
	useEffect(() => {
		scrollToNewMessages()
	})
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
				<section className="messages-container" style={{overflowY: 'auto'}}>
					<Container className="d-flex flex-column" style={{ height: '100%', width:'100%' }}>
						{
							loading ? (
									<Spinner className="align-self-center" animation="border"/>
							) :
									(
											''
									)
						}
						{messages && messages.map(msg => <Message key={msg.id} message={msg} />)}
						<span ref={scrollToRef}/>
					</Container>
				</section>
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
