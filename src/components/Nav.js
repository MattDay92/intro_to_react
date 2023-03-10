// rcc

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            // don't forget to add to index head if using bootstrap!
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/news">News</Link>
                            <Link className="nav-link" to="/feed">Instagram</Link>
                            <a className="nav-link disabled">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>

        )
    }
}
