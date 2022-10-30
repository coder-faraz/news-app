import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import Navbar from './MyComponents/Navbar';
import News from './MyComponents/News';


export default class App extends Component {

  state = {
      mode: 'light',
      progress: 0,
  };


  toggleMode = () => {
    if(this.state.mode==='light') {
      document.body.classList.add('dark');
      this.setState({ mode: 'dark' });
    }
    else {
      document.body.classList.remove('dark');
      this.setState({ mode: 'light' });
    }
  }

  setLoadingBarProgress = (progress) => {
    this.setState({
      progress: progress,
    })
  }


  render() {

    return (
      <Router>
        <Navbar useMode={ this.state.mode } toggler={ this.toggleMode }/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}   />

        <Routes>  {/* When i m navigating, the component is not Re-mounting because react thinks that a component
                     is already mounted then why re-mount when its path changes. You have to force Re-mount a 
                     component by giving a unique key prop to all the elements, then it will Re-mount */}
          <Route exact path="/" element={ <News progress={ this.setLoadingBarProgress } key="general" cat='general' useMode={this.state.mode}/> } />
          <Route exact path="business" element={ <News progress={ this.setLoadingBarProgress } Key="business" cat='business' useMode={this.state.mode}/> } />
          <Route exact path="/health" element={ <News progress={ this.setLoadingBarProgress } key="health" cat='health' useMode={this.state.mode}/> } />
          <Route exact path="/sports" element={ <News progress={ this.setLoadingBarProgress } key="sports" cat='sports' useMode={this.state.mode}/> } />
          <Route exact path="/science" element={ <News progress={ this.setLoadingBarProgress } key="science" cat='science' useMode={this.state.mode}/> } />
          <Route exact path="/technology" element={ <News progress={ this.setLoadingBarProgress } key="technology" cat='technology' useMode={this.state.mode}/> } />
          <Route exact path="/entertainment" element={ <News progress={ this.setLoadingBarProgress } key="entertainment" cat='entertainment' useMode={this.state.mode}/> } />
        </Routes>
      </Router>
    )
  }
}

