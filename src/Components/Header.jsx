import { useState } from 'react';

const Header = () => {
    const [Show, setShow] = useState(false);   //response.data 
 
    function copy (){
        navigator.clipboard.writeText(window.location.href)
        setShow(true)
        setTimeout(function () {
            setShow(false)
        }, 3000);
    }

    return(
        <div>
            <p className='app__p'>Чек сформирован облачной кассой 
            <a href={process.env.REACT_APP_VDPAYBOX_HREF} target="_blank" without rel="noreferrer" className='app__a'>VDPayBox</a>
            </p>
            <a className='app__a' onClick={copy}>Копировать ссылку</a>
            {
             Show ?
             <span style={{fontWeight: 700, color: "$ColorDarckGreen", paddingLeft: 5, position: "absolute"}} >✓</span>
             : null
            }
        </div>
    )
}

export { Header }