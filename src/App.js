import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";






function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => {
        setUsers(data)

      })
  }, [users])
  // Get current posts




  return (
    <div className='App'>
      <input placeholder='Search' type="text" onChange={(event) => {
        setSearch(event.target.value)
      }}
      />
      {
        users.filter((val) => {
          if (search == "") {
            return val
          } else if ((val.name.toLowerCase().includes(search.toLowerCase())) || (val.username.toLowerCase().includes(search.toLowerCase()))) {
            return val
          }

        }).map((val, key) => {
          return (

            <div className='user' key={key}>
              <p>{val.name}</p>
              <p>val.username</p>

            </div>














          );
        })}


    </div>





  );
};















export default App;
