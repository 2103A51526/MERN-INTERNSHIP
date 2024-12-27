import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Displaydata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getmoviedata');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Movie Data</h1>
      <table border='1'>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Actor</th>
            <th>Actress</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={i}>
              <td>{r.movies}</td>
              <td>{r.actor}</td>
              <td>{r.actress}</td>
              <td>{r.ratings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Displaydata;
