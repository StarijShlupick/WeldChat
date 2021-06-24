import React, {FunctionComponent} from "react";
import {TMessageProps} from "../../features/types";
import {Card} from "react-bootstrap";
import {auth} from "../../firebase";

const Message: FunctionComponent<TMessageProps> = (props: TMessageProps) => {
	// @ts-ignore
	const { text, uid } = props.message;

	// @ts-ignore
	const messageUser = uid === auth.currentUser.uid ? 'sent' : 'received';
	return (
			<section className={`message pt-2 pb-2 ${messageUser === 'sent' ? 'align-self-end' : 'align-self-start'}`}
							 style={messageUser === 'sent' ? {textAlign: 'end', maxWidth: '75%'} : {textAlign: 'start', maxWidth: '75%'}}>
				<Card className={`message__card d-flex flex-column mb-3 shadow ${messageUser}`}>
					<Card.Header className="p-2 pt-1 pb-1">
						<Card.Title className="mb-0">
							{messageUser === 'sent' ? 'You' : uid}, <span className="text-muted font-weight-light">time</span>
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
