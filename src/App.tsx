import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Auth from "./components/Auth/Auth";
import { Spinner } from "react-bootstrap";

const App: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
        <section className="app d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
          <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className="mb-5">WeldChat</h1>
            <Spinner animation="border"/>
          </div>
        </section>
    )
  }
  return (
    <section className="App" style={{ height: '100vh' }}>
      {user ? <ChatRoom /> : <Auth />}
    </section>
  );
}

export default App;
