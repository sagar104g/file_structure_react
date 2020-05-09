import React from 'react';
import './App.css';
import { Router, Route, browserHistory} from 'react-router'
import notFound from './components/notFound'
import fileSystem from './components/fileSystem'
function App() {
  return (
    <div className="App">
       <Router history = {browserHistory}>
        <Route exact path = '/NOT_FOUND' component = {notFound("test")} />
        <Route component = {fileSystem} />
      </Router>
    </div>
  );
}

export default App;
