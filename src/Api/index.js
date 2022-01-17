import axios from 'axios'

export const fetchCheck = async() => {
    try{        
        const response = await axios.get('https://api.stage.vdpaybox.ru/api/receipt/deviceInfo/large21')
        console.log(response.data.result)
        return response.data.result
    }
    catch(error){
        // console.log(error.response.data)
        return "error"
    }
}
