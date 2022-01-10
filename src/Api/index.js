import axios from 'axios'

const url = "https://api.stage.vdpaybox.ru/api/info/receipt/lena"
const url2 = "https://api.stage.vdpaybox.ru/api/info/receipt/202f:57:00"

export const fetchCheck = async() => {
    try{
        // const data = await axios.get(url1)
        const response = await axios.get(url)
        return response.data
        
    }
    catch(error){}
}
