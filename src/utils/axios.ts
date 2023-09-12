import axios from 'axios'

const instance = axios.create({ timeout: 4000 })

export default instance
