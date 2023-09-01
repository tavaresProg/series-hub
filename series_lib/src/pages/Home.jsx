import { useState, useEffect } from 'react';

import SerieCard from '../components/SerieCard';
import Plans from '../components/plans/Plans';
import Accordion from '../components/accordion/Accordion';
import Banner from '../components/banner/Banner';

import './SeriesGrid.css';

const seriesUrl = import.meta.env.VITE_API_SERIES;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () => {


  const [topSeries, setTopSeries] = useState([]);

  const getTopRatedSeries = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopSeries(data.results);
  }

  useEffect(() => {

    const getTopSeries = `${seriesUrl}top_rated?${apiKey}`;
    getTopRatedSeries(getTopSeries);


  }, [])

  return (

    <div className="wrapper">

      <Banner />

      <div className='container'>

        <Plans />

        <h2 className="title">
          Subscribe to get the best we have to offer</h2>
        <h3 className='subtitle'>
          +100 series and movies to watch without ads.</h3>
        <div className="series-container">
          {topSeries.length === 0 && <p>Loading...</p>}
          {topSeries.length > 0 &&
            topSeries.slice(0, 9).map((serie) => <SerieCard key={serie.id} serie={serie} />)}
        </div>
      </div>

      <Accordion />

    </div>
  )
}

export default Home