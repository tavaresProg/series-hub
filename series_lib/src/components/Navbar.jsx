import { Link } from 'react-router-dom';
import { BiMoviePlay } from 'react-icons/bi'
import { SlPresent } from 'react-icons/sl'

import './Navbar.css';

const Navbar = () => {

    return (
        <nav id='navbar'>
            <h2>
                <Link to='/'><BiMoviePlay />Series Prime</Link>
            </h2>

            <button type='submit'>
                <SlPresent />assine agora
            </button>

        </nav>
    )
}

export default Navbar