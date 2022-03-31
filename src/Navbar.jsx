import logo from './logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () =>
{
    return (
        <nav className="navbar">
            <img src={ logo } className="logo" alt="React Logo" />
            <h1>Blog Basic</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New</Link>
            </div>
        </nav>
    )
}

export default Navbar;