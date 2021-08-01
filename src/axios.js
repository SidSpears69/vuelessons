import axios from 'axios'
const token = '1234567890'
export default axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    test: '777',
    Authorization: `Bearer ${token}`
  }
})
