import React, { useState } from 'react';
const DefaultPage = () => {
    var [Id_check, setId_check] = useState("");

    const openCheck = () => {
        
        window.location.replace(process.env.REACT_APP_OPEN_CHECK_STAGE + Id_check);
    }
    // setId_check("123")
    return (
        <div className="check-container check zig-zag" style={{marginTop: 55}}>
            <div className='m-lr-20'>
                <p>Введите уникальный идентификационный номер чека</p>
                <div className="d-flex ">
                    {/* <p>https://rt.vdpaybox.ru/info/</p> */}
                    <div className='div-border-bot'>
                        <input 
                            autoFocus
                            value={Id_check}
                            onChange={(event) => setId_check(event.target.value)}
                            className="check__input">                            
                        </input>
                        <button 
                            className="button-close" 
                            onClick={() => setId_check("")}>
                            <span style={{ fontSize: 20 }}>×</span>
                        </button>
                    </div>
                </div>
                <button
                    className='app__button-error btn-m'
                    onClick={openCheck}>
                    Открыть чек
                </button>
            </div>
        </div>
    )
}

export { DefaultPage }