import React from 'react';
import './App.css';
import Messages from './components/Messages';

function App() {
  return (
    <div className="App">
      <Messages name="Messages" unread={45} />
      <Messages name="Notifications" unread={10} />
    </div>
  );
}

export default App;
