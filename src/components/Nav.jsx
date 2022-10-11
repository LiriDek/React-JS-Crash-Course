import { Link } from 'react-router-dom';

function Nav() {
    return(
    <nav>
        <Link to="/">Home</Link>
        <Link to="/users/ronaldo">Ronaldo</Link>
        <Link to="/users/Messi">Messi</Link>
        <Link to="/users/Bragg">D.Bragg</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
    </nav>
    );
}

export default Nav;