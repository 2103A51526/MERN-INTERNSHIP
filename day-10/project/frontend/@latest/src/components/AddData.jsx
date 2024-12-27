import React from 'react'
import axios from 'axios';
import { useState } from 'react'

function AddData() {
  const [movies, setmoviename] = useState();
  const [actor, setactor] = useState();
  const [actress, setactress] = useState();
  const [ratings, setrating] = useState();

  const senddata = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/movies',
        {
          movies,
          actor,
          actress,
          ratings
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
    return (
    <>
    <h1>Add movies name</h1>
    <form onSubmit={senddata}>
    <input type="text" name='movies'
    onChange={(e) => setmoviename(e.target.value)} />
      <input type="text" name="actor" 
      onChange={(e) => setactor(e.target.value)} />
      <input type='text' name="actress" 
      onChange={(e) => setactress(e.target.value)} />
      <input type='number' name="ratings" 
      onChange={(e) => setrating(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
    </>
    
  )
}

export default AddData