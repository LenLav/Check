import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCheck } from '../../api/index'

var result = ''

var data = ''

var ofd = ''
var fn = ''
var sno = ''
var tradePlace = ''

var operator = ''
var checkTovar = ''
var sum = ''
var typePay = ''
var typeCheck = ''

var clientInfo = ''
var checkOrg = ''

var paymentMethod = ''
var paymentObject = ''
var nds = ''

var extraZero = ''

const IndexFoundCheck = () => {
    const [Result, setResult] = useState([]);   //response.data

    const [Data, setData] = useState([]);   //response.data

    const [Ofd, setOfd] = useState([]);   //response.data.ofd
    const [Fn, setFn] = useState([]);
    const [Sno, setSno] = useState([]);
    const [TradePlace, setTradePlace] = useState();

    const [CheckTovar, setCheckTovar] = useState([]);   //список товаров(услуг)
    const [Operator, setOperator] = useState([]); 
    const [Sum, setSum] = useState([]);
    const [TypePay, setTypePay] = useState();
    const [TypeCheck, setType_check] = useState();

    const [ClientInfo, setClientInfo] = useState();
    const [CheckOrg, setCheckOrg] = useState([]);   //response.data.organization  

    //////////....dictionaries....///////////////
    const [PaymentMethod, setPaymentMethod] = useState([]);//dictionaries PaymentMethod
    const [PaymentObject, setPaymentObject] = useState([]);//dictionaries PaymentObject
    const [NDS, setNDS] = useState([]);//dictionaries NDS

    const [ExtraZero, setExtraZero] = useState();

    const id = useParams().id

    var response = '0'
    const [result2, setresult2] = useState(true);


    useEffect(() => {
        const fetch = async () => {
            response = await fetchCheck(id);

            if (response === "error") { 
                setresult2(false);
                return 
            }

            setData(response.data);
            setCheckOrg(response.data.organization);
            setOperator(response.data.taskJson.parameters.operator && response.data.taskJson.parameters.operator.name 
                        ? response.data.taskJson.parameters.operator.name 
                        : '' );
            setCheckTovar(response.data.taskJson.parameters.items);
            setSum(response.data.taskJson.parameters.payments[0].sum);
            

            if(response.data.taskJson.parameters.clientInfo){
                setClientInfo(response.data.taskJson.parameters.clientInfo.emailOrPhone)
            }
            else{
                setClientInfo("-")
            }

            setFn(response.data.cashbox.fn)
            setSno(response.data.sno)
            setOfd(response.data.ofd);

            setType_check(response.data.receiptType.name)

            setPaymentMethod(response.dictionaries.paymentMethod)
            setPaymentObject(response.dictionaries.paymentObject)
            setNDS(response.dictionaries.tax)

            if (response.data.taskJson.parameters.payments[0].type === 'cash') {
                setTypePay('Наличными')
            }
            if (response.data.taskJson.parameters.payments[0].type === 'electronically') {
                setTypePay('Безналичными')
            }


            if (response.data.sumDoc.includes(".") === false &&
                String(response.data.taskJson.parameters.payments[0].sum).includes(".") === false) {
                setExtraZero(".00₽")
            }
            else {
                setExtraZero("₽")
            }            

        }
        fetch();
    }, []);
    
    data = Data
    ofd = Ofd
    fn = Fn
    sno = Sno
    tradePlace = TradePlace

    operator = Operator
    checkTovar = CheckTovar
    sum = Sum
    typePay = TypePay
    typeCheck = TypeCheck

    clientInfo = ClientInfo
    checkOrg = CheckOrg

    paymentMethod = PaymentMethod
    paymentObject = PaymentObject
    nds = NDS

    extraZero = ExtraZero


    return result2
}

export { IndexFoundCheck }
export {  
    result,
    data,
    ofd,
    fn,
    sno,
    tradePlace,
    operator,
    checkTovar,
    sum,
    typePay,
    typeCheck,
    clientInfo,
    checkOrg,
    paymentMethod,
    paymentObject,
    nds,
    extraZero,
 };