import React from 'react';
import logo from './happy.jpg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to a site WITH brotli files!!!!!!!!
        </p>
        <a
          className="App-link"
          href="/shoppingList/"
        >
          Let's try some functions!
        </a>
        <a 
          className="App-link"
          href="/about/"
        >
        Gated content
        </a>
		        <a 
          className="App-link"
          href="/.auth/login/facebook"
        >
        Log in with
        </a>

      </header>
    </div>
  );
}

export default Home;
