import { Link } from 'react-router-dom';
import {BiSearch,BiMoviePlay } from 'react-icons/bi'

import './Navbar.css';

const Navbar = () => {

    return (
        <nav id='navbar'>
            <h2>
                <Link to='/'><BiMoviePlay/>Series Prime</Link>
            </h2>
            <form>
                <input type="text" placeholder='Qual série assistir?' />
                <button type='submit'>
                    <BiSearch/>
                </button>
            </form>
        </nav>
    )
}

export default Navbar