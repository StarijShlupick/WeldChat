import React, {useEffect, useRef, useState} from "react";
import {auth, firestore} from "../../firebase";
import {Button, Container, Form, Image, Navbar, Spinner} from "react-bootstrap";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase";
import Message from "../Message/Message";
import {useAuthState} from "react-firebase-hooks/auth";
import {useAppSelector} from "../../app/hooks";
import ThemeModeToggler from "../ThemeModeToggler/ThemeModeToggler";
import {EThemeMode} from "../../features/types";
import sendIconLight from '../../assets/icons/send_white_24dp.svg';

const ChatRoom: React.FC = () => {
	const scrollToRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const messagesRef = firestore.collection('messages');
	const query = messagesRef.orderBy('createdAt').limitToLast(30);
	const [messages, loading] = useCollectionData(query, {idField: 'id'});
	const [formValue, setFormValue] = useState('');
	const [user] = useAuthState(auth);
	const themeMode = useAppSelector((state) => state.ThemeModeReducer)
	const scrollToNewMessages = () => {
		scrollToRef.current.scrollIntoView({behavior: 'smooth'});
	}

	async function handleSubmit(e: { preventDefault: () => void; }) {
		e.preventDefault();
		const uid = user?.uid;
		await messagesRef.add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			email: user?.email
		})
		setFormValue('');
		scrollToRef.current.scrollIntoView({behavior: 'smooth'});
	}

	useEffect(() => {
		scrollToNewMessages()
	})
	return (
			<section className="chat-room d-flex flex-column justify-content-between h-100">
				<Navbar bg={themeMode} variant={themeMode}>
					<Container>
						<Navbar.Brand>WeldChat</Navbar.Brand>
						<div className="wrapper d-flex align-items-center">
							<div className="wrapper mr-3">
								<ThemeModeToggler/>
							</div>
							<Button variant={themeMode === EThemeMode.dark ? "outline-light" : "outline-primary"} size="sm"
											onClick={() => {
												auth.signOut()
											}}> Log Out </Button>
						</div>
					</Container>
				</Navbar>
				<section className="messages-container" style={{overflowY: 'auto'}}>
					<Container className="d-flex flex-column" style={{height: '100%', width: '100%'}}>
						{
							loading ? (
											<Spinner className="align-self-center" animation="border"
															 variant={themeMode === EThemeMode.light ? 'dark' : 'light'}/>
									) :
									(
											''
									)
						}
						{messages && messages.map(msg => <Message key={msg.id} message={msg}/>)}
						<span ref={scrollToRef}/>
					</Container>
				</section>
				<Navbar bg={themeMode} variant={themeMode}>
					<Container className="h-100">
						<Form className="d-flex justify-content-between align-items-center w-100" onSubmit={handleSubmit}>
							<Form.Group id="message" style={{width: '100%', margin: '0'}}>
								<Form.Control
										type="text"
										placeholder="Your message..."
										required
										style={{minHeight: '40px'}}
										value={formValue}
										onChange={(e) => setFormValue(e.target.value)}/>
							</Form.Group>
							<Button className="ml-1" type="submit" variant={themeMode === EThemeMode.light ? 'primary' : 'secondary'}>
								<Image src={sendIconLight}/>
							</Button>
						</Form>
					</Container>
				</Navbar>
			</section>
	);
}

export default ChatRoom;
