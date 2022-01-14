import axios from 'axios'

const url1 = "https://api.stage.vdpaybox.ru/api/info/receipt/lena"
const url2 = "https://api.stage.vdpaybox.ru/api/info/receipt/202f:57:00"

const id_check = "RiPo_ele11dc"
const url = "https://api.stage.vdpaybox.ru/api/receipt/deviceInfo/" + id_check

const url3 = "https://api.stage.vdpaybox.ru/api/receipt/deviceInfo/large21"



// export async function getReceiptByUrl(){
//     const url = window.location.href; //Сохраняешь ссылку в переменную
//     const newUrl = url.replace(
//       'http://localhost:3000/#', //Строка или regexp того что надо заменить
//       "https://api.stage.vdpaybox.ru" // На что надо заменить
//     );






// window.location.replace( 'https://api.stage.vdpaybox.ru/api/receipt/deviceInfo/_RiPo_ele12dc');

const URL = window.location.href
console.log(URL)


export const fetchCheck = async() => {
    try{
        

        const response = await axios.get(url3)
        console.log(response.data.result)
        return response.data.result
    }
    catch(error){
        // console.log(error.response.data)
        return "error"
    }
}
