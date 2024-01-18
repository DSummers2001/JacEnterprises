import { useState, useEffect } from 'react'
import './App.css'
import ActivityButton from './components/ActivityButton';
import axios from 'axios';

function App() {
  const [activity, setActivity] = useState(null);
  const [savedActivities, setSavedActivities] = useState([]);
  const [astronomyData, setAstronomyData] = useState([]);

  const handleFetchActivity = (newActivity) => {
    setActivity(newActivity);
  };

  const fetchAstronomyData = async () => {
    try{
      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5');
      setAstronomyData(response.data)
    } catch (error){
      console.error('Error fetching astronomy api')
    }
  }

  const fetchSavedActivities = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/saved-activities');
      setSavedActivities(response.data);

    } catch (error){
      console.error('Error fetching saved activities')
    }
  };

  const handleDeleteActivity = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/delete-activity/${id}`);
      fetchSavedActivities();
    } catch (error) {
      console.error('Error deleting activity:', error);
    }
  };

  useEffect(() => {
    fetchAstronomyData();
    fetchSavedActivities();
  }, []);

  return (
    <div>
      <div>
        <h1>Astronomy Information</h1>
        <ul>
          {astronomyData.map(savedAstronomy =>(
            <li key={savedAstronomy.title}>
            <p><strong>Title:</strong>{savedAstronomy.title}</p>
            <img src ={savedAstronomy.url} alt="Picture of Astronomy"/>
            <p><strong>Date:</strong>{savedAstronomy.date}</p>
            <p><strong>Explanation:</strong>{savedAstronomy.explanation}</p>
            </li>
          ))}
        </ul>
      </div>
      <h2>Need some ideas!</h2>
      <ActivityButton onFetchActivity={handleFetchActivity} />
      {activity}
      <hr />
      <h2>Saved Activities:</h2>
      <ul>
        {savedActivities.map(savedActivity => (
          <li key={savedActivity.id}>
            <p><strong>Activity:</strong> {savedActivity.activity}</p>
            <p><strong>Type:</strong> {savedActivity.type}</p>
            <p><strong>Participants:</strong> {savedActivity.participants}</p>
            <p><strong>Price:</strong> {savedActivity.price}</p>
            <p><strong>Accessibility:</strong> {savedActivity.accessibility}</p>
            <button onClick={() => handleDeleteActivity(savedActivity.id)}>
              Delete
            </button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App