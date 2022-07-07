import React from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CampoPesquisa from './CampoPesquisa';
=======
import Search from './pages/Search';
>>>>>>> main-group-9-req5

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
      <Search />
    </div>
  );
}

export default App;
