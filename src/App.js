import './App.scss';
// import logo from './Logo_vti_1.png';
import logo from './img/Logo_vti_1.png';

import React, { useEffect, useState } from 'react';
import { fetchCheck } from './Api/index'

function App() {
  const [Data, setData] = useState([]);
  const [CheckOrg, setCheckOrg] = useState(1);
  const [CheckTovar, setCheckTovar] = useState([]);
  const [count, setCount] = useState(2);
  const [rez, setrez] = useState([]);
  const [Sum, setSum] = useState([]);
  const [Ofd, setOfd] = useState([]);
  const [TaskJson, setTaskJson] = useState([]);
  const [СashboxModel, setСashboxModel] = useState([]);

  const [Fn, setFn] = useState([]);
  const [Sno, setSno] = useState([]);
  const [TradePlace, setTradePlace] = useState(1);

  const [clientInfo, setclientInfo] = useState();
  const [Electronically, setElectronically] = useState();
  const [Type_check, setType_check] = useState();

  const EmailHref = "https://e.mail.ru/compose/?mailto=mailto%3A" + CheckOrg.email;


  
  function click(){
    console.log("клик")
  }

  function click2(){
    window.location.reload();
  }

  function UserGreeting() {
    console.log("pag")
  }

  

   useEffect(() => {
      const fetch = async () => {
      const response = await fetchCheck();
      console.log(response)

      if(response === "error"){

        console.log("pagepagepag")
        // return <UserGreeting />;
        // return(
        //   <div>page page pagepagepag epagepagepagepagepa gepagepagepagepagepagep agepagepagepagepage pagepagepagepagepage</div>
        // );


        document.getElementById('success').hidden = true
        document.getElementById('error').hidden = false
        // return <UserGreeting />;
        return
      }

      if(response.success === true){
        document.getElementById('success').hidden = false
        document.getElementById('error').hidden = true
      }


      setData(response.result);
      setCheckOrg(response.result.organization);
      setCheckTovar(response.result.taskJson.parameters.items);
      setrez(response.result);
      setSum(response.result.taskJson.parameters.payments[0].sum);
      setclientInfo(response.result.taskJson.parameters.clientInfo.emailOrPhone)

      setFn(response.result.fn)
      setSno(response.result.sno)
      // setTradePlace()

      // console.log(response.result.taskJson.parameters.items)

      setCount(10)
      setOfd(response.result.ofd);
      setTaskJson(response.result.taskJson.parameters.operator);
      setСashboxModel(response.result.cashbox.cashboxModel);
      // console.log(response.result.taskJson)

      setType_check(response.result.receiptType.name)

      if (response.result.taskJson.parameters.electronically === true) {
        setElectronically('Безналичными')
      }
      else { setElectronically('Наличными') }

      if (response.result.taskJson.tradePlace === null) {
        document.getElementById('TradePlace').hidden = false
      }
      else { 
        document.getElementById('TradePlace').hidden = true
        setTradePlace(response.result.taskJson.tradePlace)
      }
    }
    fetch();
  }, [])

  


  return (
    <div className="App">  

    <div id='success' hidden>  

      <div className='check' id='check'>  

        <h2 className='check__h2'>{Type_check}</h2>

        <hr className="check__hr"></hr>

        <div className='check__div'>
            <div className='check__div-1'>КАССОВЫЙ ЧЕК № {Data.id}</div>
            <div className='check__div-2'>{new Date(Data.fnDateTime).toLocaleString().substring(0, new Date(Data.fnDateTime).toLocaleString().length - 3) }</div>
            
            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Смена</div>
            <div className='check__div-2'>{Data.shift}</div>
            
            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Модель кассы</div>
            <div className='check__div-2'>{СashboxModel.model}</div>

            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Фискальный признак</div>
            <div className='check__div-2'>{Data.fpd}</div>
            
            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Фискальный накопитель</div>
            <div className='check__div-2'>{Fn.number}</div>

            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Оператор фискальных данных</div>
            <div className='check__div-2'>{Ofd.name}</div>
            
            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>ИНН ОФД</div>
            <div className='check__div-2'>{Ofd.inn}</div>

            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Система налогообложения </div>
            <div className='check__div-2'>{Sno.name}</div>
            
            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1' id='TradePlace'>Торговая площадка</div>
            <div className='check__div-2'>{TradePlace}</div>
        </div>

        <hr className="check__hr"></hr>

          <div className='check__div'>
            <div className='check__div-tovar-1 info'>№</div>
            <div className='check__div-tovar-2 info'>Наименование</div>
            <div className='check__div-tovar-3 info'>Сумма</div>
          </div>

          {CheckTovar.map((data) =>
            <div className='check__div'>
            <div className='check__div-tovar-1'>1.</div>
            <div className='check__div-tovar-2'>{data.name}</div>
            <div className='check__div-tovar-3'>{data.price}.00₽ × {data.quantity} <br/>= <b>{data.amount}.00</b>₽</div>
            </div>
          )}

          <div className='check__div'>
            <div className='check__div-1 info'>ИТОГО</div>
            <div className='check__div-2 info'>{Sum}.00₽</div>
            
            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Безналичными</div>
            <div className='check__div-2'>{Sum}.00₽</div>
            
            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Итого без НДС</div>
            <div className='check__div-2'>{Sum}.00₽</div>
            
            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Эл. адрес или тел. получателя</div>
            <div className='check__div-2'>{clientInfo}</div>
          </div>

          <hr className="check__hr"></hr>

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

            {/* <div className='check__div-1'>
              <img src={logo} alt="logo" className='check__img'></img>
            </div>
            <div className='check__div-2'style={{color: "#2a1b75", fontSize: 20}}><b>(4712) 400-900</b></div> */}
          </div>

          {/* <div className='check__div'>
            <div className='check__div-tovar-1'><img src={logo} alt="logo" className='check__img'></img></div>
            <div className='check__div-tovar-2' style={{color: "#2a1b75", fontSize: 20}}><b>vti-service.ru</b></div>
            <div className='check__div-tovar-3' style={{color: "#2a1b75", fontSize: 20}}><b>(4712) 400-900</b></div>
          </div> */}

          

      </div>
     
      <div className="div_email">

      <p className="p_email">Вы можете отправить чек на свой email:</p>

      <input className="input_email" placeholder="Адрес вашей электронной почты"></input>
      <button className="app__button" onClick={click}>Отправить</button>

      </div>

      </div> 

      
      

      <div id='error' hidden>
        <div className='error__div'>
          <h1 className='error__h1'><hr className='hr-dotted'></hr>Чек по указанной ссылке не найден.<hr className='hr-dotted'></hr></h1>
          {/* <hr className='hr-dotted'></hr> */}
          <p className='error__p'>Пожалуйста, подождите, Ваш чек скоро появится.</p>
          <p className='error__p'>Или проверьте правильность введенной ссылки.</p>
        </div>
        <button onClick={click2} className="app__button__error">Повторить попытку</button>
      </div>

      

    </div>
  );
}

export default App;
