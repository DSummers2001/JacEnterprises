import { useState, useEffect } from 'react'
import './App.css'
import ActivityButton from './components/ActivityButton';
import axios from 'axios';

function App() {
  const [activity, setActivity] = useState(null);
  const [savedActivities, setSavedActivities] = useState([]);

  const handleFetchActivity = (newActivity) => {
    setActivity(newActivity);
  };

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
    fetchSavedActivities();
  }, []);

  return (
    <div>
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