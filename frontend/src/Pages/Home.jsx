import { useState, useEffect } from 'react'
import ActivityButton from '../components/ActivityButton';
import axios from 'axios';

const Home = () => {
    const [astronomyData, setAstronomyData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  const fetchAstronomyData = async () => {
    try{
      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5');
      const data = await response.data;
      setAstronomyData(Array.isArray(data) ? data : [data]);
    } catch (error){
      console.error('Error fetching astronomy api', error);
    }
  }

    fetchAstronomyData();
  }, []);

  const showNextApi = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % astronomyData.length);
  }

  const showPreviousApi = () => {
    if (currentIndex == 0){
      setCurrentIndex(5);
    }
    setCurrentIndex((prevIndex) => (prevIndex - 1));
  }

    return (
    <div>
      <div className='AstronomyInfo'>
        <h1>Astronomy Information</h1>
        <div>
          {astronomyData.length > 0 && (
            <div>
              <p>{astronomyData[currentIndex].title}</p>
              <img src={astronomyData[currentIndex].url} alt={astronomyData[currentIndex].title} />
              <p>{astronomyData[currentIndex].date}</p>
              <p>{astronomyData[currentIndex].explanation}</p>
            </div>
          )}
            <button id='apiBackButton' onClick={showPreviousApi}>Back</button>
            <button id='apiNextButton' onClick={showNextApi}>Next</button>
        </div>
      </div>
      <div className='ActivityGenerator'>
      <ActivityButton />
      </div>
    </div>
    );
};

export default Home