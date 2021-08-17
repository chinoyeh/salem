import React, {useState}from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    return (
     
            <div className = "navbar">
            <div className = 'navlinks-top-layer'>
                <ul>
                    <li>Business</li>
                    <li>Personal</li>
                </ul>
                <ul>
                    <li>number</li>
                    <li><Link to ='/Login'>Sign-up/Login</Link></li>
                </ul>
            </div>
            <hr/>
            <div className = 'navlinks-bottom-layer'>
                <div className ='Logo'>
                <Link to ='/'>Salem</Link>
                </div>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Loans
                    </li>
                    <li>
                        About us 
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Pages
                    </li>
                    <li>
                        Blog
                    </li>
                </ul>
                <button>
                    Apply now
                </button>
            </div>
            </div>
            
        
    )
}

export default Navbar

