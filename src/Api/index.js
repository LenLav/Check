import axios from 'axios'

export const fetchCheck = async(id) => {
    const URL = process.env.REACT_APP_SERVER_HOST + id
    console.log(URL) 
    try{  
        const response = await axios.get(URL)
        // console.log(response.data.result)
        return response.data.result
    }
    catch(error){
        // console.log(error.response.data)
        return "error"
    }
}
