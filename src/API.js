import axios from 'axios'

const api_link = process.env.REACT_APP_API_ENDPOINT || ''

class API_methods {
  api_link = api_link

  reset() {
    axios.get(`${api_link}/reset`).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  move(value, square, sequence_num) {
    axios.post(`${api_link}/move`, 
      {
        move: {value, square, sequence_num},
        id: "placeholder-uuid",
      }
    ).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}

export default new API_methods()