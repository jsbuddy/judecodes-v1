import React from 'react';
import {Redirect, Route} from 'react-router';
import './App.scss';
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Shell from './components/Shell/Shell'
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
    return (
        <div className="App">
            <Nav/>
            <div className='container'>
                <Profile/>
                <Route path={'/'} render={() => <Redirect to={'/about'}/>} exact/>
                <Route path={'/about'} component={Shell(About)} exact/>
                <Route path={'/resume'} component={Shell(Resume)} exact/>
                <Route path={'/portfolio'} component={Shell(Portfolio)} exact/>
                <Route path={'/contact'} component={Shell(Contact)} exact/>
            </div>
        </div>
    );
}

export default App;
