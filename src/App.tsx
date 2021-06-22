import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Auth from "./components/Auth/Auth";

const App: React.FC = () => {
  const [user] = useAuthState(auth)
  return (
    <section className="App" style={{ height: '100vh' }}>
      {user ? <ChatRoom /> : <Auth />}
    </section>
  );
}

export default App;
