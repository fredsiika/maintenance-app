import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api'
import axios from 'axios';

function App() {

  // Create state variables
  let [responseData, setResponseData] = useState('')
  let [textSearch, setTextSearch] = useState('')
  let [message, setMessage] = useState('')
  // fetches data
  // const fetchData = (e) => {
  //   e.preventDefault()
  //   api.getData()
  //   .then((response)=>{
  //       setResponseData(response.data)
  //       console.log(response)
  //       alert("There was an error fetching data.", error)
  //   })
  //   .catch((error) => {
  //       console.log(error)
  //   })
  // }

  const options = {
    // method: 'POST',
    method: 'GET',
    // url: 'https://realty-in-us.p.rapidapi.com/properties/v3/list',
    url: 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete',
    params: {input: `${textSearch}`, limit: '1000'},
    // data: '{"limit":50,"offset":0,"postal_code":"75069","status":["for_rent"],"type":["condos","condo_townhome_rowhome_coop","condo_townhome","townhomes","duplex_triplex","single_family","multi_family","apartment","condop","coop"],"sort":{"direction":"desc","field":"list_date"}}',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '27ac56314cmsh70e12fc1f8e9739p170816jsnd3d0bd5be5be',
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
  };
  
  const fetchData = (e) => {
    e.preventDefault()

    setMessage('Loading...')
    
    axios.request(options)
    .then((response) => {
      // setResponseData(response.data)
      setResponseData(response.data)
      setMessage('')
      // console.log('Results: \n', responseData)
      console.log('Results: \n',response.data)
    }).catch((error) => {
      setMessage('Error fetching apartment data.', error)
      console.error(error)
      alert("There was an error loading apartment data.")
    });
  }
  

  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{
            background: 'black',
            color: 'white',
            padding: '1rem',
            display: 'inline-block'
          }}>FixMyFlat
          </h1>
          <span style={{fontSize: '1rem'}}>Landlord Maintenance Repair Tracker</span>
      </header>
      <div style={{
                background: '#EEE',
                padding: '5%',
                fontFamily: '"Lucida Console", Monaco, monospace'
            }}>
        <h3>Analyze data your apartment's response time to resolving maintenance repairs</h3>
        <form onSubmit={fetchData}>
          <fieldset>
            <legend>
              Search for apartments and get auto complete suggestions by states, cities, districts, addresses, and zipcodes.{'\n'}

              Ex: California Los Angeles or 
              2425 Sahalee Dr W Sammamish, WA
            </legend>
            <label htmlFor="textSearch">Enter apartment address
                <input
                    required
                    name="textSearch"
                    id="textSearch"
                    type='text'
                    placeholder='2650 S. McDonald St. McKinney, Tx 75069'
                    value={textSearch}
                    onChange={(e) => {
                      setTextSearch(e.target.value) 
                      console.log(e.target.value)
                    }}
                />
                <button type='submit'>Submit</button>
              </label>
          </fieldset>
        </form>
        <p>{message}</p>
        <p>{responseData ? [Object.keys(responseData.autocomplete[0])] : ''}</p>
        <div>
          <h3>Search by Zipcode</h3>
          <button onClick={(e) => fetchData(e)} type='button'>
            75069
          </button>
        {/* <p>Total apartments in: {responseData ? JSON.stringify(responseData.data.home_search.total) : "Failed to fetch apartment data: 'total'."}</p> */}
        {/* <p>Total count: {responseData ? JSON.stringify(responseData.data.home_search.count) : "Failed to fetch apartment data: 'count'."}</p> */}
        </div>
      </div>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      <iframe 
        className="airtable-embed airtable-dynamic-height" 
        src="https://airtable.com/embed/shrjc7XHgfrkUejlp?backgroundColor=gray" 
        frameborder="0" 
        onmousewheel="" 
        width="100%" 
        height="1850" 
        style={{
          background: 'transparent',
          border: '1px solid #ccc'}}>
          </iframe>
      
      <div>
        <p>FixMyFlat 2022 |
            Created by {' '}
            <a
              className="App-link"
              href="https://linkedin.com/in/fredsiika"
              target="_blank"
              rel="noopener noreferrer"
            >
            Fred Siika
            </a>
          </p>
      </div>
      
    </div>
    
  );
}

export default App;
