import { useState } from 'react'
import './App.css'
import ActivityButton from './components/ActivityButton';

function App() {
  const [activity, setActivity] = useState(null);

  const handleFetchActivity = (newActivity) => {
    setActivity(newActivity);
  };

  const handleDeleteActivity = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/delete-activity/${id}`);
      // Optionally, you can fetch the updated list of saved activities here
    } catch (error) {
      console.error('Error deleting activity:', error);
    }
  };

  return (
    <div>
      <h1>Bored Activity App</h1>
      <ActivityButton onFetchActivity={handleFetchActivity} />
      {activity && (
        <div>
          <h2>Random Activity:</h2>
          <p>{activity.activity}</p>
          <p>Type: {activity.type}</p>
          <p>Participants: {activity.participants}</p>
          <p>Price: {activity.price}</p>
          <p>Accessibility: {activity.accessibility}</p>
          <button onClick={() => handleDeleteActivity(activity.id)}>
            Delete Activity
          </button>
        </div>
      )}
    </div>
  );
}

export default App