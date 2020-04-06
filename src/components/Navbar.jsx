import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:'75px'}}>
                    <Link to='/'>
                        <a className="navbar-brand">Movies</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item mr-3">
                                <Link to='/managemovie'>
                                    <a className="nav-link" href="#">Manage Movies<span class="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li className="nav-item mr-3">
                                <Link to='/managecategory'>
                                    <a className="nav-link" href="#">Manage Categories</a>
                                </Link>
                            </li>
                            <li className="nav-item mr-3">
                                <Link to='/connectionlist'>
                                    <a className="nav-link" href="#">Connect Movie & Category</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
