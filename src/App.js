import './App.scss';
import React, { useEffect, useState } from 'react';
import { fetchCheck } from './Api/index'

// import logo from './img/Logo_vti_1.png';


function App() {
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

  


  function reload(){
    window.location.reload();
  }

 

  // const [response, setResponse] = useState(null);

   useEffect(() => {
      const fetch = async () => {
      const response = await fetchCheck();

      // setResponse(await fetchCheck())
     

      if(response === "error"){
        document.getElementById('success').hidden = true
        document.getElementById('error').hidden = false
        return
      }
      else{
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

      // else { setElectronically('Безналичными') }

      if (response.data.tradePlace === null) {
        document.getElementById('TradePlace1').hidden = true
        document.getElementById('TradePlace2').hidden = true
        // setTradePlace("–")
      }
      else { 
        document.getElementById('TradePlace1').hidden = false
        document.getElementById('TradePlace2').hidden = false
        setTradePlace(response.data.tradePlace)
      }


      for (let i = 0; i < response.data.taskJson.parameters.items.length; i++) {
        const element = response.data.taskJson.parameters.items[i];
        // console.log(element.paymentMethod)
        // console.log(element.paymentObject)

        for (let pM = 0; pM < response.dictionaries.paymentMethod.length; pM++) {
          if(element.paymentMethod === response.dictionaries.paymentMethod[pM].eng){
            
          }
          
        }
        
      }


      setPaymentMethod(response.dictionaries.paymentMethod)
      setPaymentObject(response.dictionaries.paymentObject)
      setNDS(response.dictionaries.tax)


     

  

    }
    fetch();
  }, [])




  


  return (
    <body>
    <div className="App">  

    <p className='app__p'>Чек сформирован облачной кассой <a href='https://gate.stage.vdpaybox.ru/#/' className='app__a'>VDPayBox</a></p>

    <div id='success' hidden>  

      <div className='check zig-zag' id='check'>  

        <h2 className='check__h2'>{Type_check}</h2>

        <hr className="hr-two-gradient"></hr>

        <div className='check__div'>
            <div className='check__div-1'>Дата</div>
            <div className='check__div-2'>{new Date(Data.fnDateTime).toLocaleString().substring(0, new Date(Data.fnDateTime).toLocaleString().length - 3) }</div>
           
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
            <div className='check__div-2'><a href='https://www.nalog.gov.ru/' target="_blank" rel="noreferrer" className='app__a'>www.nalog.gov.ru</a></div> 
        </div>

        <hr className="hr-two-gradient"></hr>

          <div className='check__div'>
            <div className='check__div-tovar-1 info'>№</div>
            <div className='check__div-tovar-2 info' >Наименование</div>
            <div className='check__div-tovar-3 info'>Сумма</div>
          </div>

          <ol  style={{margin: 0, paddingLeft: 0}}>

          {CheckTovar.map((data) =>
            <div>

            <div className='check__div' style={{flexWrap: 'nowrap'}}>
            <div className='check__div-tovar-1'><li style={{listStylePosition: 'inside'}}></li></div>
            <div className='check__div-tovar-2'>
              <div className='div_word-wrap'>{data.name}
              </div>
              </div>
            <div className='check__div-tovar-3'>
              {data.price}.00₽ × {data.quantity} = <span className='color-darckgreen'>{data.amount}.00</span>₽
              </div>
            </div>

            <div className='check__div' style={{flexWrap: 'nowrap'}}>
            <div className='check__div-tovar-1'></div>


            

            {PaymentObject.map((object) =>
            data.paymentObject === object.eng ?
            <div className='check__div-tovar-2'>{object.name}</div>  :   <p></p>
             )} 

            {PaymentMethod.map((method) =>
            data.paymentMethod === method.eng ?
            <div className='check__div-tovar-3'>{method.name}</div>  :   <p></p>
             )}


            </div>

            <div className='check__div' style={{flexWrap: 'nowrap'}}>
            <div className='check__div-tovar-1'></div>
            <div className='check__div-tovar-2'></div>

            {NDS.map((nds) =>
            data.tax.type === nds.eng ?
            <div className='check__div-tovar-3'>НДС: {nds.name}</div>  :   <p></p>
             )}


            {/* {data.tax.type == 'none' ?
            <div className='check__div-tovar-3' >НДС: без НДС</div> : 
            <div className='check__div-tovar-3'>НДС: c НДС</div>} */}
            </div>

            <hr className='hr-horizontal-gradient'></hr>

            </div>
            
          )}

          </ol>


          <div className='check__div' style={{paddingTop: 20}}>
            <div className='check__div-1 info'>ИТОГО</div>
            <div className='check__div-2 info'>{Data.sumDoc}.00₽</div>
            
            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>{TypePay}</div>
            <div className='check__div-2'>{Sum}.00₽</div>
            
            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Итого без НДС</div>
            <div className='check__div-2'>{Sum}.00₽</div>
            
            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Email/телефон получателя</div>
            <div className='check__div-2'>{clientInfo}</div>
          </div>

          <hr className="hr-two-gradient"></hr>

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

          {/* <div className='check__div'>
            <div className='check__div-tovar-1'><img src={logo} alt="logo" className='check__img'></img></div>
            <div className='check__div-tovar-2' style={{color: "#2a1b75", fontSize: 20}}><b>vti-service.ru</b></div>
            <div className='check__div-tovar-3' style={{color: "#2a1b75", fontSize: 20}}><b>(4712) 400-900</b></div>
          </div> */}

          

      </div>
     
      </div> 
     
      

      <div className='check zig-zag' id='error' hidden>
        <div className='error__div' style={{ marginTop: 0}}>
          <h1 style={{fontWeight: 300, marginTop: 0}}><hr className='hr-dotted'></hr>Чек скоро появится<hr className='hr-dotted'></hr></h1>
          {/* <p>Пожалуйста, подождите, Ваш чек скоро появится.</p> */}
          <p>если адрес указан верно</p>
        </div>
        <button onClick={reload} className="app__button-error">Повторить попытку</button>
      </div>


      {/* {1 == 1 ?  
          <p >qwertyuio</p> : 'unable to map' }  */}
          
        {/* {console.log(CheckTovar)} */}

        {/* {console.log(this.handleCheck('item2'))} */}
        

      

    </div>
    </body>
  );
}

export default App;
