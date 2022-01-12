import './App.css';
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

  const [clientInfo, setclientInfo] = useState(1);
  const [Electronically, setElectronically] = useState(1);
  const [Type_check, setType_check] = useState(1);

  const EmailHref = "https://e.mail.ru/compose/?mailto=mailto%3A" + CheckOrg.email;

  function click(){
    console.log("клик")
  }

  

  useEffect(() => {
      const fetch = async () => {
      const response = await fetchCheck();

      setData(response.result);
      setCheckOrg(response.result.organization);
      setCheckTovar(response.result.taskJson.parameters.items);
      setrez(response.result);
      setSum(response.result.taskJson.parameters.payments[0].sum);
      setclientInfo(response.result.taskJson.parameters.clientInfo.emailOrPhone)

      setFn(response.result.fn)
      setSno(response.result.sno)
      // setTradePlace()

      console.log(response.result.taskJson.parameters.items)

      setCount(10)
      setOfd(response.result.ofd);
      setTaskJson(response.result.taskJson.parameters.operator);
      setСashboxModel(response.result.cashbox.cashboxModel);
      console.log(response.result.taskJson)

      setType_check(response.result.receiptType.name)

      // console.log(response); //{result: {…}, success: true}
      // console.log(response.result); //{id: 3709, uuid: 'f843d2dd-ef5e-4366-...
      // console.log(response.result.taskJson.parameters.payments);
      // console.log(response.result.taskJson.parameters.electronically)      
      // console.log(response.result.taskJson.parameters.items);


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
    

      <div className='check'>
        
        

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

          <div className='check__div'>
            <div className='check__div-tovar-1'><img src={logo} alt="logo" className='check__img'></img></div>
            <div className='check__div-tovar-2' style={{color: "#2a1b75", fontSize: 20}}><b>vti-service.ru</b></div>
            <div className='check__div-tovar-3' style={{color: "#2a1b75", fontSize: 20}}><b>(4712) 400-900</b></div>
          </div>

          

      </div>










      

      <div className="Check">
        <h2 className="StH1">{Type_check}</h2>
        <hr className="HrCheck"></hr>

        <p>{Ofd.name}</p>
        <p>Товарный чек №{Data.id}</p>
        


        <table className="TableCheck">
          <tr>
            <td className="TdLev3 TdInfo">№</td>
            <td className="TdSred3 TdInfo">Наименование</td>
            <td className="TdPrav3 TdInfo">Сумма</td>

          </tr>

          

          {/* <ol type="1"> */}
          {CheckTovar.map((data) =>
          
            <tr id="Tovar">

              
              
              <td className="TdLev3" id="Tovar">1</td>
              
              {/* <td className="TdLev3">{count}</td> */}
              <td className="TdSred3">{data.name}</td>
              <td className="TdPrav3">{data.price}.00₽ × {data.quantity} = {data.amount}.00₽</td>

              {/* <script type="text/javascript">alert(1);</script> */}

              
            </tr>
             
            )}
            {/* </ol> */}


          <tr>
            <td className="TdLev TdInfo">ИТОГО</td>
            <td className="TdPrav TdInfo">{Sum}.00₽</td>
          </tr>

          <tr>
            <td className="TdLev">{Electronically}</td>
            <td className="TdPrav">{Sum}.00₽</td>
          </tr>

          <tr>
          <td className="TdLev">ИТОГО без НДС:</td>
            <td className="TdPrav">{Sum}.00₽</td>
          </tr>
        </table>

        <hr className="HrCheck"></hr>

        <table className="TableCheck">
          <tr>
            <td className="TdLev">Дата выдачи</td>
            <td className="TdPrav">{Data.fnDateTime}</td>
          </tr>
          <tr>
            <td className="TdLev">Опрератор</td>
            <td className="TdPrav">{TaskJson.name}</td>
          </tr>
          <tr>
            <td className="TdLev">Модель кассы</td>
            <td className="TdPrav">АТОЛ 11Ф</td>
          </tr>
          <tr>
            <td className="TdLev">Номер смены</td>
            <td className="TdPrav">{Data.shift}</td>
          </tr>
          {/* <tr>
            <td className="TdLev">fpd/ tradePlace/ "name": "ЕНВД (Отменена)" Система налогообложения</td>
            <td className="TdPrav">{Data.cashboxId}</td>
          </tr> */}
          <tr>
            <td className="TdLev">fpd</td>
            <td className="TdPrav"></td>
          </tr>
          <tr>
            <td className="TdLev">fn</td>
            <td className="TdPrav"></td>
          </tr>
          <tr>
            <td className="TdLev">Товарная площадка</td>
            <td className="TdPrav">(если присутсвует)</td>
          </tr>
          <tr>
            <td className="TdLev">Система налогообложения</td>
            <td className="TdPrav"></td>
          </tr>
          {/* <tr>
            <td className="TdLev">Наименование:</td>
            <td className="TdPrav">{CheckOrg.name}</td>
          </tr> */}
          
        </table>



        <table className="TableCheck">
          <tr>
            <td className="TdLev TdInfo">Организация</td>
            <td className="TdPrav"></td>
          </tr>
          <tr>
            <td className="TdLev">Наименование:</td>
            <td className="TdPrav">{CheckOrg.name}</td>
          </tr>
          {/* <tr>
            <td className="TdLev">Об организации:</td>
            <td className="TdPrav">{CheckOrg.comment}</td>
          </tr>
          <tr>
            <td className="TdLev">{CheckOrg.positionName}</td>
            <td className="TdPrav">{CheckOrg.managerLastName} {CheckOrg.managerFirstName} {CheckOrg.managerMiddleName}</td>
          </tr> */}
          <tr>
            <td className="TdLev">ИНН:</td>
            <td className="TdPrav">{CheckOrg.inn}</td>
          </tr>

          {/* <tr>
            <td className="TdLev">URL:</td>
            <td className="TdPrav">{Ofd.url}</td>
          </tr> */}

          {/* <tr>
            <td className="TdLev">КПП:</td>
            <td className="TdPrav">{CheckOrg.kpp}</td>
          </tr>
          <tr>
            <td className="TdLev">ОГРН:</td>
            <td className="TdPrav">{CheckOrg.ogrn}</td>
          </tr> */}
          {/* <tr>
            <td className="TdLev">Адрес:</td>
            <td className="TdPrav">{CheckOrg.postcode}, {CheckOrg.region}, {CheckOrg.addressActual}</td>
          </tr>
          <tr>
            <td className="TdLev">Телефон:</td>
            <td className="TdPrav">{CheckOrg.phone}</td>
          </tr>
          <tr>
            <td className="TdLev">Эл. адрес:</td>
            <td className="TdPrav">
              <a className="TablHref" href={EmailHref} target="_blank">{CheckOrg.email}</a>
            </td>
          </tr> */}
          


          <tr>
            <td className="TdLev td-pad-bottom-L">Эл. адрес или тел. получателя:</td>
            <td className="TdPrav td-pad-bottom-L">
              <a className="TablHref" target="_blank">{clientInfo}</a>
            </td>
          </tr>

        </table>

      </div>

      <div className="div_email">

      <p className="p_email">Вы можете отправить чек на свой email:</p>

      <input className="input_email" placeholder="Адрес вашей электронной почты"></input>
      <button className="btn_email" onClick={click}>Отправить</button>

      </div>

      

    </div>
  );
}

export default App;
