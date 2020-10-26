const axios = require('axios')

const getData = async () =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = await res.data
    console.log(data)
}


getData()
