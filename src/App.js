import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Repos from './views/Repos'
import Commits from './views/Commits'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Repos} />
        <Route path="/commits" exact component={Commits} />
      </Router>
    </div>
  );
}

export default App;
