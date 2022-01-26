import { data, fn } from '../index';

const Fiscalized = () => {

    if (data.status !== 0) {
        return (
            <p><i>находится в обработке</i></p>
        )
    }
    else {
        return (
            <div className='check__div'>
                <div className='check__div-1'>Дата</div>
                <div className='check__div-2'>{new Date(data.fnDateTime).toLocaleString().substring(0, new Date(data.fnDateTime).toLocaleString().length - 3)}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>Смена</div>
                <div className='check__div-2'>{data.shift}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>ФД</div>
                <div className='check__div-2'>{data.fdn}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>ФП</div>
                <div className='check__div-2'>{data.fpd}</div>

                <div className='check__div-wrap'></div>{/* перенос */}

                <div className='check__div-1'>ФН</div>
                <div className='check__div-2'>{fn.number}</div>
            </div>

        )
    }

}

export { Fiscalized }