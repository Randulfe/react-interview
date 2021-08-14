import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <Router>
        <nav>
            <Link to='/' id="navTitle">
                Home
            </Link>
        </nav>
        </Router>
    )
}

export default Nav;