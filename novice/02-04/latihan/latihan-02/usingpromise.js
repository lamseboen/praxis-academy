// const fetch = require('node-fetch')
// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

const axios = require('axios')
axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(response => console.log(response.data))