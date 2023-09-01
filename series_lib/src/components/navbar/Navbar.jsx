import { BiMoviePlay } from 'react-icons/bi'

import './Navbar.css';

const Navbar = () => {

    return (
        <nav id='navbar'>
            <h2>
                <BiMoviePlay />Series Prime
            </h2>

            <button type='submit'>
               Login
            </button>

        </nav>
    )
}

export default Navbar