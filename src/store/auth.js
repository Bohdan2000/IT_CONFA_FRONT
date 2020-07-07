import axios from "axios";

// const getAuthAxios = token => {
//   return axios.create({
//     headers: {
//       "authorization": `Bearer ${token}`
//     }
//   })
// }

export default {
  actions: {
    async login({dispatch, commit}, formData) {
      try {
        console.log('123123123',formData);
        let options = {
          headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'Access-Control-Allow-Origin': '*'
          }
      }
        const token = await axios.post('http://localhost:3000/auth/signIn', JSON.stringify(formData),options)
      } catch (e) {
        throw e
      }
    }
  }
}