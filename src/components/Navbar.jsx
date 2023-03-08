import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [show, setshow] = useState(false)
    
    return (
        <>
            <section className="navbar-bg">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            {/* <img style={{ height: '50px' }} src={process.env.PUBLIC_URL + './logo.png'} alt="Dev" /> */}
                            Dev
                        </a>
                        <button className="navbar-toggler" type="button"
                            // data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            onClick={() => setshow(!show)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn-style btn" type="submit">Sign up</button>
                                <button className="btn-style btn" type="submit">Log in</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar