/* eslint-disable react/prop-types */
import axios from 'axios';
import {useState, useEffect} from 'react'

const ActivityButton = () => {
  const [savedActivities, setSavedActivities] = useState([]);

  useEffect(() => {
    fetchSavedActivities();
  }, [])

  const fetchActivity = async () => {
    try {
      await axios.get('http://localhost:8080/api/activity');
      fetchSavedActivities();
    } catch (error) {
      console.error('Error fetching activity:', error);
    }
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

  return (
    <div className='activities'>
      <h2>Getting bored click here for ideas!</h2>
      <button onClick={fetchActivity}>
      Random Activity
      </button>
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
};

export default ActivityButton;