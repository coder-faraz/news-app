import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Navbar extends Component {

  render() {

    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-${ this.props.useMode } bg-${this.props.useMode }`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
            </ul>
            <div className="form-check form-switch">
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {this.props.useMode==='light'? 'dark'.charAt(0).toUpperCase() + 'dark'.slice(1):'light'.charAt(0).toUpperCase() + 'light'.slice(1)} Mode</label>
              <input className="form-check-input" onClick={ this.props.toggler } type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
            </div>
        </div>
        </nav>
    )
  }
}


export default Navbar;