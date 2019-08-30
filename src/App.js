import React from 'react';
import './App.css';
import Main from './components/Pages/Main'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MovieView from './components/Pages/MovieView'
import AddMovie from './components/Pages/AddMovie'


function App() {
  return (
    <div className="App">
      <Router>
        <Switchh>
          <Route path="/" exact component={ Main } />
          <Route path="/filmes/:id" component={ MovieView } />
          <Route path="/filmes" component={ AddMovie } />
        </Switchh>
        
      </Router>
    </div>
  );
}

export default App;
