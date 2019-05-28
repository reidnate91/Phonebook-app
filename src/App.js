import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import UpdatePage from './pages/UpdatePage'
import ProfilePage from './pages/ProfilePage'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/user" component={RegisterPage}/>
            <Route exact path= "/update/:id" component= {UpdatePage}/>
            <Route exact path= "/profile/:id" component= {ProfilePage}/>
            {/* <Route path="/" component={User}/> */}
            {/* <Route component={NoMatch}/> */}
        </Switch>
    </Router>
    </div>
  );
}

export default App;
