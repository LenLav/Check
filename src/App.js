import './App.css';

// import './App.scss'

import React, { useEffect, useState } from 'react';
import { fetchCheck } from './Api/index'
// import axios from 'axios';

function App() {
  const [Data, setData] = useState([]);
  const [CheckOrg, setCheckOrg] = useState(1);
  const [CheckTovar, setCheckTovar] = useState([]);
  const [count, setCount] = useState(2);
  const [rez, setrez] = useState([]);
  const [Sum, setSum] = useState([]);
  const [clientInfo, setclientInfo] = useState(1);
  const [Electronically, setElectronically] = useState(1);

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

      console.log(response.result.taskJson.parameters.items)

      setCount(10)

      // console.log(response); //{result: {…}, success: true}
      // console.log(response.result); //{id: 3709, uuid: 'f843d2dd-ef5e-4366-...
      // console.log(response.result.taskJson.parameters.payments);
      // console.log(response.result.taskJson.parameters.electronically)      
      // console.log(response.result.taskJson.parameters.items);

      if (response.result.taskJson.parameters.electronically == 'true') {
        setElectronically('Безналичными')
      }
      else { setElectronically('Наличными') }
    }
    fetch();
  }, [])


  return (
    <div className="App">

      

      <div className="Check">
        <h2 className="StH1">Кассовый чек</h2>
        <hr className="HrCheck"></hr>


        <table className="TableCheck">
          <tr>
            <td className="TdLev3 TdInfo">№</td>
            <td className="TdSred3 TdInfo">Наименование</td>
            <td className="TdPrav3 TdInfo">Сумма</td>

          </tr>

          

          {/* <ol type="1"> */}
          {CheckTovar.map((data) =>
          
            <tr id="Tovar">

              
              
              <td className="TdLev3" id="Tovar"><li></li></td>
              
              {/* <td className="TdLev3">{count}</td> */}
              <td className="TdSred3">{data.name}</td>
              <td className="TdPrav3">{data.price}.00₽ × {data.quantity} = {data.amount}.00₽</td>

              {/* <script type="text/javascript">alert(1);</script> */}

              
            </tr>
             
            )}
            {/* </ol> */}


          <tr>
            <td className="TdLev3 TdInfo td-pad-top-S">Итого</td>
            <td className="TdSred3 td-pad-top-S"></td>
            <td className="TdPrav3 TdInfo td-pad-top-S">{Sum}.00₽</td>
          </tr>

          <tr>
            <td className="TdLev3 td-pad-bottom-L"></td>
            <td className="TdSred3 td-pad-bottom-L"></td>
            <td className="TdPrav3 td-pad-bottom-L">{Electronically}</td>
          </tr>
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
          <tr>
            <td className="TdLev">Об организации:</td>
            <td className="TdPrav">{CheckOrg.comment}</td>
          </tr>
          <tr>
            <td className="TdLev">{CheckOrg.positionName}</td>
            <td className="TdPrav">{CheckOrg.managerLastName} {CheckOrg.managerFirstName} {CheckOrg.managerMiddleName}</td>
          </tr>
          <tr>
            <td className="TdLev">ИНН:</td>
            <td className="TdPrav">{CheckOrg.inn}</td>
          </tr>
          <tr>
            <td className="TdLev">КПП:</td>
            <td className="TdPrav">{CheckOrg.kpp}</td>
          </tr>
          <tr>
            <td className="TdLev">ОГРН:</td>
            <td className="TdPrav">{CheckOrg.ogrn}</td>
          </tr>
          <tr>
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
          </tr>
          <tr>
            <td className="TdLev td-pad-bottom-L">Payment Callback:</td>
            <td className="TdPrav td-pad-bottom-L">
              <a className="TablHref" href={CheckOrg.paymentCallback} target="_blank">{CheckOrg.paymentCallback}</a>
            </td>
          </tr>


          <tr>
            <td className="TdLev td-pad-bottom-L">Эл. адрес или тел. получателя:</td>
            <td className="TdPrav td-pad-bottom-L">
              <a className="TablHref" target="_blank">{clientInfo}</a>
            </td>
          </tr>

          <tr>
            <td className="TdLev">Id:</td>
            <td className="TdPrav">{Data.id}</td>
          </tr>
          <tr>
            <td className="TdLev">Uuid:</td>
            <td className="TdPrav">{Data.uuid}</td>
          </tr>
        </table>

      </div>

      <div className="div_email">

      <p className="p_email">Вы можете отправить чек на свой email:</p>

      <input className="input_email" placeholder="Адрес вашей электронной почты"></input>
      <button className="btn_email" onClick={click}>Отправить</button>

      </div>

      <div id="Tovar">
        <p></p>
        <p></p>
        <p></p>
        <p></p>

      </div>

    </div>
  );
}

export default App;
