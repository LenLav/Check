import axios from 'axios'

// const url1 = "https://api.stage.vdpaybox.ru/api/info/receipt/lena"
// const url2 = "https://api.stage.vdpaybox.ru/api/info/receipt/202f:57:00"

// const urlAnna = "https://api.stage.vdpaybox.ru/api/receipt/deviceInfo/RiPo_ele11dc"

const id_check = "RiPo_ele14dc"
const url = "https://api.stage.vdpaybox.ru/api/receipt/deviceInfo/" + id_check

export const fetchCheck = async() => {
    try{
        // const data = await axios.get(url1)
        // const response = await axios.get(url)
        const response = await axios.get(url)
        console.log(response.data)
        return response.data
        
    }
    catch(error){
        console.log(error.response.data)
        return "error"
    }
}
