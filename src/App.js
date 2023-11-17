import React from 'react';
import './App.css';
import PersonList from './PersonList'; // Make sure this path is correct based on your project structure

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>User List</h1>
        </header>
        <main>
          <PersonList />
        </main>
      </div>
  );
}

export default App;
