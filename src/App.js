import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/Homepage';
import FlashCards from './components/FlashCards';
import CardsManager from './components/CardsManager';
import Header from './components/Header';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} >
            <Header />
            <Route path="/" exact component={HomePage} />
            <Route path="/card-manager" exact component={CardsManager} />
            <Route path="/flashcards" component={FlashCards} />
          </div>
        </BrowserRouter>
      </div>
    );

  }
}


export default App;
