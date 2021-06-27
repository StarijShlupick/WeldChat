import React, {FunctionComponent} from "react";
import {TMessageProps} from "../../features/types";
import {Card} from "react-bootstrap";
import {auth} from "../../firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const Message: FunctionComponent<TMessageProps> = (props: TMessageProps) => {
	// @ts-ignore
	const { text, uid, createdAt } = props.message;
	const [user] = useAuthState(auth);
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];
	const date = createdAt ? createdAt.toDate() : new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const month = date.getMonth();
	const day = date.getDate();
	const time = `${monthNames[month]} ${day},
			${hours >= 10 ? hours : `0${hours}`}:${minutes >= 10 ? minutes : `0${minutes}`}`;

	const messageUser = uid === (auth.currentUser && auth.currentUser.uid) ? 'sent' : 'received';
	const name = user?.email
	return (
			<section className={`message pt-2 pb-1 ${messageUser === 'sent' ? 'align-self-end' : 'align-self-start'}`}
										 style={messageUser === 'sent' ? {textAlign: 'end', maxWidth: '75%'} : {textAlign: 'start', maxWidth: '75%'}}>
				<Card className={`message__card d-flex flex-column mb-3 shadow ${messageUser}`}
													border={`${messageUser === 'sent' ? 'primary' : 'light'}`}>
					<Card.Header className="p-2 pt-1 pb-1">
						<Card.Title className="mb-0">
							{messageUser === 'sent' ? 'You' : name && name.split('@')[0]}
							<div className="text-muted font-weight-light mt-1" style={{fontSize: '0.8rem'}}>
								{time}
							</div>
						</Card.Title>
					</Card.Header>
					<Card.Body className="p-2">
						<Card.Text style={{textAlign: 'start'}}>
							{text}
						</Card.Text>
					</Card.Body>
				</Card>
			</section>
	);
}

export default Message;
