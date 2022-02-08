import { sno, ofd, tradePlace } from '../index';
import { Fiscalized } from '../blocksFoundCheck/fiscalized'

const InfoBlock = () => {

    return (
        <div>
            <Fiscalized />

            <div className='check__div'>

                <div className='check__div-1'>СНО</div>
                <div className='check__div-2'>{sno.name}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>ОФД</div>
                <div className='check__div-2'>{ofd.name}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                {/* <div className='check__div-1' id='TradePlace1'>Торговая площадка</div> */}

                {tradePlace ?
                    <div>
                        <div className='check__div-1' id='TradePlace1'>Торговая площадка</div>
                        <div className='check__div-2' id='TradePlace2'>{tradePlace}</div>
                        <div className='check__div-wrap'></div>{/* перенос */}
                    </div>
                    : null
                }
                {/* <div className='check__div-2' id='TradePlace2' hidden>{tradePlace}</div> */}


                <div className='check__div-1'>Сайт ФНС</div>
                <div className='check__div-2'><a href='https://www.nalog.gov.ru/' target="_blank" rel="noreferrer" className='app__a'>nalog.gov.ru</a></div>
            </div>
        </div>
    )
}

export { InfoBlock }