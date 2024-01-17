/* eslint-disable react/prop-types */
import axios from 'axios';

const ActivityButton = ({ onFetchActivity }) => {
  const fetchActivity = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/activity');
      onFetchActivity(response.data);

      window.location.reload();
    } catch (error) {
      console.error('Error fetching activity:', error);
    }
  };

  return (
    <button onClick={fetchActivity}>
      Random Activity
    </button>
  );
};

export default ActivityButton;