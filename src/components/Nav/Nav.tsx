import React, { useEffect, useState } from 'react';
import { FiFileText, FiGrid, FiMoon, FiPhone, FiUser, FiSun } from 'react-icons/fi'
import './Nav.scss';
import { NavLink } from 'react-router-dom'

function Nav() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <nav className={'nav'}>
            <div className="nav-items">
                <NavLink to={'/about'} exact activeClassName={'active'} className="nav-item">
                    <span className="icon"><FiUser /></span>
                    <span className="label">About</span>
                </NavLink>
                <NavLink to={'/resume'} exact activeClassName={'active'} className="nav-item">
                    <span className="icon"><FiFileText /></span>
                    <span className="label">Resume</span>
                </NavLink>
                <NavLink to={'/portfolio'} exact activeClassName={'active'} className="nav-item">
                    <span className="icon"><FiGrid /></span>
                    <span className="label">Portfolio</span>
                </NavLink>
                <NavLink to={'/contact'} exact activeClassName={'active'} className="nav-item">
                    <span className="icon"><FiPhone /></span>
                    <span className="label">Contact</span>
                </NavLink>
            </div>
            <button className="theme-switcher" onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>
                {theme === 'light' && <span className="icon"><FiSun /></span>}
                {theme === 'dark' && <span className="icon"><FiMoon /></span>}
            </button>
        </nav>
    )

}

export default Nav;