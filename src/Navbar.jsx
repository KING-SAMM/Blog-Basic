import logo from './logo.svg';

const Navbar = () =>
{
    return (
        <nav className="navbar">
            <img src={ logo } className="logo" alt="React Logo" />
            <duv className="nav-item">
                <a href="/">Home</a>
                <a href="/create">New</a>
            </duv>
        </nav>
    )
}

export default Navbar;