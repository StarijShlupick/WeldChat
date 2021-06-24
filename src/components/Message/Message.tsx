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
			<section className={`message w-75 pt-2 pb-2 ${messageUser === 'sent' ? 'align-self-end' : 'align-self-start'}`}>
				<Card className={`message__card justify-content-end pt-1 pr-2 pb-2 pl-2 mb-3 shadow ${messageUser}`}>
					<Card.Title className="mb-1">
						{uid}
					</Card.Title>
					<Card.Subtitle className="text-muted">
						time
					</Card.Subtitle>
					<Card.Text>
						{text}
					</Card.Text>
				</Card>
			</section>
	);
}

export default Message;
