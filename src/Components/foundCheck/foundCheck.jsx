import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCheck } from '../../api/index'

import { IndexFoundCheck } from '../../components/foundCheck/index'
import {rNumbers} from '../../components/foundCheck/index';


const FoundCheck = () => {

    // console.log(rNumbers)

    const [Data, setData] = useState([]);   //response.data

    const [Ofd, setOfd] = useState([]);   //response.data.ofd
    const [Fn, setFn] = useState([]);
    const [Sno, setSno] = useState([]);
    const [TradePlace, setTradePlace] = useState();

    const [CheckTovar, setCheckTovar] = useState([]);   //список товаров(услуг)
    const [Sum, setSum] = useState([]);
    const [TypePay, setTypePay] = useState();
    const [Type_check, setType_check] = useState();

    const [clientInfo, setclientInfo] = useState();
    const [CheckOrg, setCheckOrg] = useState([]);   //response.data.organization  

    //////////....dictionaries....///////////////
    const [PaymentMethod, setPaymentMethod] = useState([]);//dictionaries PaymentMethod
    const [PaymentObject, setPaymentObject] = useState([]);//dictionaries PaymentObject
    const [NDS, setNDS] = useState([]);//dictionaries NDS

    const [ExtraZero, setExtraZero] = useState();

    const id = useParams().id

    useEffect(() => {
        const fetch = async () => {
            const response = await fetchCheck(id);

            if (response === "error") {
                document.getElementById('success').hidden = true
                document.getElementById('error').hidden = false
                return
            }
            else {
                document.getElementById('success').hidden = false
                document.getElementById('error').hidden = true
            }



            setData(response.data);
            setCheckOrg(response.data.organization);
            setCheckTovar(response.data.taskJson.parameters.items);
            setSum(response.data.taskJson.parameters.payments[0].sum);
            setclientInfo(response.data.taskJson.parameters.clientInfo.emailOrPhone)

            setFn(response.data.cashbox.fn)
            setSno(response.data.sno)

            setOfd(response.data.ofd);


            setType_check(response.data.receiptType.name)


            if (response.data.taskJson.parameters.payments[0].type === 'cash') {
                setTypePay('Наличными')
            }
            if (response.data.taskJson.parameters.payments[0].type === 'electronically') {
                setTypePay('Безналичными')
            }

            if (response.data.tradePlace === null) {
                document.getElementById('TradePlace1').hidden = true
                document.getElementById('TradePlace2').hidden = true
            }
            else {
                document.getElementById('TradePlace1').hidden = false
                document.getElementById('TradePlace2').hidden = false
                setTradePlace(response.data.tradePlace)
            }


            setPaymentMethod(response.dictionaries.paymentMethod)
            setPaymentObject(response.dictionaries.paymentObject)
            setNDS(response.dictionaries.tax)

            if (response.data.sumDoc.includes(".") === false &&
                String(response.data.taskJson.parameters.payments[0].sum).includes(".") === false) {
                setExtraZero(".00₽")
                // console.log("not includes .")
            }
            else {
                setExtraZero("₽")
                // console.log("includes .")
            }


        }
        fetch();
    }, [])


    const ProductList = () => {
        return (
            <div>
                <div className='check__div'>
                    <div className='check__div-tovar-1 info'>№</div>
                    <div className='check__div-tovar-2 info' >Наименование</div>
                    <div className='check__div-tovar-3 info'>Сумма</div>
                </div>

                <ol style={{ margin: 0, paddingLeft: 0 }}>

                    {CheckTovar.map((data) =>
                        <div>

                            <div className='check__div' style={{ flexWrap: 'nowrap' }}>
                                <div className='check__div-tovar-1'><li style={{ listStylePosition: 'inside', fontSize: 14, height: 21 }}></li></div>
                                <div className='check__div-tovar-2'>
                                    <div className='div_word-wrap'>{data.name}
                                    </div>
                                </div>
                                <div className='check__div-tovar-3'>


                                    {data.price}₽ × {data.quantity} = <span className='color-darckgreen'>{data.amount}</span>₽
                                </div>
                            </div>

                            <div className='check__div' style={{ flexWrap: 'nowrap' }}>
                                <div className='check__div-tovar-1'></div>




                                {PaymentObject.map((object) =>
                                    data.paymentObject === object.eng ?
                                        <div className='check__div-tovar-2'>{object.name}</div> : null
                                )}

                                {PaymentMethod.map((method) =>
                                    data.paymentMethod === method.eng ?
                                        <div className='check__div-tovar-3'>{method.name}</div> : null
                                )}


                            </div>

                            <div className='check__div' style={{ flexWrap: 'nowrap' }}>
                                <div className='check__div-tovar-1'></div>
                                <div className='check__div-tovar-2'></div>

                                {NDS.map((nds) =>
                                    data.tax.type === nds.eng ?
                                        <div className='check__div-tovar-3'>НДС: {nds.name}</div> : null
                                )}

                            </div>

                            <hr className='hr-horizontal-gradient'></hr>

                        </div>

                    )}

                </ol>
            </div>
        )
    }


    const InfoBlock = () => {
        return (
            <div className='check__div'>
                <div className='check__div-1'>Дата</div>
                <div className='check__div-2'>{new Date(Data.fnDateTime).toLocaleString().substring(0, new Date(Data.fnDateTime).toLocaleString().length - 3)}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>Смена</div>
                <div className='check__div-2'>{Data.shift}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>ФД</div>
                <div className='check__div-2'>{Data.fdn}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>ФП</div>
                <div className='check__div-2'>{Data.fpd}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>ФН</div>
                <div className='check__div-2'>{Fn.number}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>СНО</div>
                <div className='check__div-2'>{Sno.name}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>ОФД</div>
                <div className='check__div-2'>{Ofd.name}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1' id='TradePlace1' hidden>Торговая площадка</div>
                <div className='check__div-2' id='TradePlace2' hidden>{TradePlace}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>Сайт ФНС</div>
                <div className='check__div-2'><a href='https://www.nalog.gov.ru/' target="_blank" rel="noreferrer" className='app__a'>nalog.gov.ru</a></div>
            </div>
        )
    }

    const SummBlock = () => {
        return (
            <div className='check__div' style={{ paddingTop: 20 }}>
                <div className='check__div-1 info'>ИТОГО</div>
                <div className='check__div-2 info'>{Data.sumDoc}{ExtraZero}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>{TypePay}</div>
                <div className='check__div-2'>{Sum}{ExtraZero}</div>

                {/* <div className='check__div-wrap'></div>перенос */}

                {/* <div className='check__div-1'>Итого без НДС</div>
            <div className='check__div-2'>{Data.sumDoc}₽</div> */}

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>Email/телефон получателя</div>
                <div className='check__div-2'>{clientInfo}</div>
            </div>

        )
    }


    const OrganizationBlock = () => {
        return (
            <div className='check__div'>
                <div className='check__div-1 info'>Организация</div>
                <div className='check__div-2'></div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>Наименование</div>
                <div className='check__div-2'>{CheckOrg.name}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>ИНН</div>
                <div className='check__div-2'>{CheckOrg.inn}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

            </div>
        )
    }


    return (
        <div>
            <div className='check zig-zag' id='check'>

                <h2 className='check__h2'>{Type_check}</h2>

                <hr className="hr-two-gradient"></hr>

                <InfoBlock />

                <hr className="hr-two-gradient"></hr>

                <ProductList />

                <SummBlock />

                <hr className="hr-two-gradient"></hr>

                <OrganizationBlock />

            </div>

        </div>
    )
}

export { FoundCheck }