// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchCheck } from '../../api/index'


// const rNumbers = 1


// const IndexFoundCheck = async () => {

//     const [Data, setData] = useState([]);   //response.data

//     const [Ofd, setOfd] = useState([]);   //response.data.ofd
//     const [Fn, setFn] = useState([]);
//     const [Sno, setSno] = useState([]);
//     const [TradePlace, setTradePlace] = useState();

//     const [CheckTovar, setCheckTovar] = useState([]);   //список товаров(услуг)
//     const [Sum, setSum] = useState([]);
//     const [TypePay, setTypePay] = useState();
//     const [Type_check, setType_check] = useState();

//     const [clientInfo, setclientInfo] = useState();
//     const [CheckOrg, setCheckOrg] = useState([]);   //response.data.organization  

//     //////////....dictionaries....///////////////
//     const [PaymentMethod, setPaymentMethod] = useState([]);//dictionaries PaymentMethod
//     const [PaymentObject, setPaymentObject] = useState([]);//dictionaries PaymentObject
//     const [NDS, setNDS] = useState([]);//dictionaries NDS

//     const [ExtraZero, setExtraZero] = useState();

//     const id = useParams().id

    
//     useEffect(() => {
//         const fetch = async () => {
//             const response = await fetchCheck(id);

//             if (response === "error") {
//                 document.getElementById('success').hidden = true
//                 document.getElementById('error').hidden = false
//                 return
//             }
//             else {
//                 document.getElementById('success').hidden = false
//                 document.getElementById('error').hidden = true
//             }

//             setData(response.data);
//             setCheckOrg(response.data.organization);
//             setCheckTovar(response.data.taskJson.parameters.items);
//             setSum(response.data.taskJson.parameters.payments[0].sum);
//             setclientInfo(response.data.taskJson.parameters.clientInfo.emailOrPhone)

//             setFn(response.data.cashbox.fn)
//             setSno(response.data.sno)
//             setOfd(response.data.ofd);

//             setType_check(response.data.receiptType.name)


//             if (response.data.taskJson.parameters.payments[0].type === 'cash') {
//                 setTypePay('Наличными')
//             }
//             if (response.data.taskJson.parameters.payments[0].type === 'electronically') {
//                 setTypePay('Безналичными')
//             }

//             if (response.data.tradePlace === null) {
//                 document.getElementById('TradePlace1').hidden = true
//                 document.getElementById('TradePlace2').hidden = true
//             }
//             else {
//                 document.getElementById('TradePlace1').hidden = false
//                 document.getElementById('TradePlace2').hidden = false
//                 setTradePlace(response.data.tradePlace)
//             }

//             setPaymentMethod(response.dictionaries.paymentMethod)
//             setPaymentObject(response.dictionaries.paymentObject)
//             setNDS(response.dictionaries.tax)

//             if (response.data.sumDoc.includes(".") === false &&
//                 String(response.data.taskJson.parameters.payments[0].sum).includes(".") === false) {
//                 setExtraZero(".00₽")
//                 // console.log("not includes .")
//             }
//             else {
//                 setExtraZero("₽")
//                 // console.log("includes .")
//             }

//         }
//         fetch();
//     }, []);

    

// }

// export { IndexFoundCheck }
// export {rNumbers};
// export {Data};