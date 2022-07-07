import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CampoPesquisa from './CampoPesquisa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ CampoPesquisa } />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
