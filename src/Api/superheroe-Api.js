import axios from 'axios'

const superheroapi = axios.create({
    baseURL: 'https://www.superheroapi.com/api.php/1726113917599602/'
})



export default superheroapi
