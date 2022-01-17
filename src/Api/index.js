import axios from 'axios'

// const url1 = "https://api.stage.vdpaybox.ru/api/info/receipt/lena"
// const url2 = "https://api.stage.vdpaybox.ru/api/info/receipt/202f:57:00"
// const url3 = "https://api.stage.vdpaybox.ru/api/receipt/deviceInfo/large21"

// const id_check = "RiPo_ele11dc"
// const url = "https://api.stage.vdpaybox.ru/api/receipt/deviceInfo/" + id_check
 
// const url = window.location.href;

const WLH = "https://rt.stage.vdpaybox.ru/info/large21"
const id_check = WLH.split("info/")[1]
// const id_check = window.location.href.split("info/")[1]

console.log(id_check)
console.log(process.env.REACT_APP_SERVER_HOST)

const url = process.env.REACT_APP_SERVER_HOST + id_check


console.log(url)



// const url22 = "https://api.stage.vdpaybox.ru/api/receipt/deviceInfo/" + id_check

export async function getReceiptByUrl(){
    const url = window.location.href; //Сохраняешь ссылку в переменную
    const newUrl = url.replace(
      'http://localhost:3000/#', //Строка или regexp того что надо заменить
      "https://api.stage.vdpaybox.ru" // На что надо заменить
    );
    console.log("https://api.stage.vdpaybox.ru")
}






// window.location.replace( 'https://api.stage.vdpaybox.ru/api/receipt/deviceInfo/_RiPo_ele12dc');

const URL = window.location.href
console.log(URL)


export const fetchCheck = async() => {
    try{
        

        const response = await axios.get(url)
        console.log(response.data.result)
        return response.data.result
    }
    catch(error){
        // console.log(error.response.data)
        return "error"
    }
}
