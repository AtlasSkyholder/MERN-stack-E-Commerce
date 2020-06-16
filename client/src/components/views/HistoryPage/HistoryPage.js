import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function HistoryPage() {

  const [History, setHistory] = useState([]);

  useEffect(() => {
    Axios.get('api/users/getHistory')
      .then(response => {
        if (response.data.success) {
          setHistory(response.data.history);
        } else {
          alert('Failed to get History');
        }
      })
  }, []);

  return (
    <div style={{ width: '80%', margin: '3rem auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>History</h1>
      </div>
      <br />
      <table>
        <thead>
          <tr>
            
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default HistoryPage
