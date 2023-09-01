import { Link } from 'react-router-dom';

import { AiFillHeart } from 'react-icons/ai';

const imageUrl = import.meta.env.VITE_IMG;

const SerieCard = ({ serie, showLink = true }) => {
    return (
        <div className='serie-card'>
            <img src={imageUrl + serie.poster_path} alt={serie.name} />
            <h2>{serie.name}</h2>
            <p>
                <AiFillHeart /> {serie.vote_average}
            </p>
            {showLink && <Link to={`/serie/${serie.id}`}>Details</Link>}

        </div>
    )
}

export default SerieCard;

