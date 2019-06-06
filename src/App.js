import React from 'react';
import './App.css';
import Messages from './components/Messages';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className="App">
      <Messages name="Messages" unread={45} />
      <Messages name="Notifications" unread={10} />
      <SignupForm />
    </div>
  );
}

export default App;
