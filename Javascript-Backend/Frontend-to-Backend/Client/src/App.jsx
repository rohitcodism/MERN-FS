import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        console.log(res.data);
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <h1>Fullstack On</h1>
      <p>JOKES : {jokes.length}</p>
      {
        jokes.map((joke, index) => {
          return (
            <div key={index}
              style={{
                display : "flex",
                gap : "2rem",
                textAlign : "center",
                justifyContent : "center",
                alignItems : "center",
              }}
            >
              <h2>{joke.title}</h2>
              <p>{joke.body}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
