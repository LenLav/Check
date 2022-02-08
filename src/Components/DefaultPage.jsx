import React, { useState } from 'react';
const DefaultPage = () => {
    var [Id_check, setId_check] = useState("");

    return (
        <div className="check-container check zig-zag" style={{marginTop: 55}}>
            <div className='m-lr-20'>
                <p>Введите идентификационный номер чека</p>
                <div className="d-flex ">
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
                    onClick={() => window.location.replace(process.env.REACT_APP_OPEN_CHECK + Id_check)}>
                    Открыть чек
                </button>
            </div>
        </div>
    )
}

export { DefaultPage }