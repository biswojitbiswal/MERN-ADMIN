import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../../Store/Auth'

function Navbar() {

    const { isLogedIn } = useAuth()

    return (
        <>
            <header id="navbar">
                <div className="container">
                    <div className="logo-name">
                        <NavLink to="/">BISWO THECH</NavLink>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "hovering" : "navlink"} to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "hovering" : "navlink"} to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "hovering" : "navlink"} to="/services">Services</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "hovering" : "navlink"} to="/contact">Contact</NavLink>
                            </li>
                            {isLogedIn ? (
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? "hovering" : "navlink"} to="/logout">Logout</NavLink>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <NavLink className={({ isActive }) => isActive ? "hovering" : "navlink"} to="/register"> Register </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive }) => isActive ? "hovering" : "navlink"} to="/login"> Login </NavLink>
                                    </li>
                                </>
                            )}


                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
