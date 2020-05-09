import React from 'react';
import './App.css';
import { Router, Route, browserHistory} from 'react-router'
import notFound from './components/notFound.jsx'
function App() {
  return (
    <div className="App">
       <Router history = {browserHistory}>
        <Route exact path = '/NOT_FOUND' component = {notFound} />
      </Router>
    </div>
  );
}

export default App;
