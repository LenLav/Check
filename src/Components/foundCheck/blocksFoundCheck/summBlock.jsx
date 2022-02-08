import {data, extraZero, typePay, sum, clientInfo} from '../index';

const SummBlock = () => {


    return (
        <div className='check__div' style={{ paddingTop: 20 }}>
            <div className='check__div-1 info'>ИТОГО</div>
            <div className='check__div-2 info'>{data.sumDoc}{extraZero}</div>

            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>{typePay}</div>
            <div className='check__div-2'>{sum}{extraZero}</div>

            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Сдача</div>
            <div className='check__div-2'>{sum - data.sumDoc}{extraZero}</div>

            {/* <div className='check__div-wrap'></div>перенос */}

            {/* <div className='check__div-1'>Итого без НДС</div>
        <div className='check__div-2'>{Data.sumDoc}₽</div> */}

            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Email/телефон получателя</div>
            <div className='check__div-2'>{clientInfo}</div>
        </div>
    )
}

export { SummBlock }