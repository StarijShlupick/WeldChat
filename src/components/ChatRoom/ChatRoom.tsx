import React from "react";
import {auth} from "../../firebase";

const ChatRoom: React.FC = () => {
	return (
			<section className="chat-room">
				<button onClick={()=>{
					auth.signOut()
				}}> Log Out </button>
			</section>
	);
}

export default ChatRoom;
