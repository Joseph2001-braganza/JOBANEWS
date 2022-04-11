import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a className="navbar-brand ms-5" href="#">JOBA NEWS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href=".com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                MORE
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="action.com">Sports</a>
                                <a className="dropdown-item" href="action1.com">Global</a>
                                <div className="dropdown-item">Business</div>
                                <a className="dropdown-item" href="actionlol.com">Weather</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" style={{
                        marginLeft: "600px"
                    }} action="https://www.google.co.in/search">
                        <input className="form-control mr-sm-2 ms-5" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </nav >
        )
    }
}
