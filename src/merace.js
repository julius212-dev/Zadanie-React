import axios from 'axios'

export default axios.create({
    baseURL: 'https://dev.energo.itsmart.sk:8081/api/data/actual/'
})