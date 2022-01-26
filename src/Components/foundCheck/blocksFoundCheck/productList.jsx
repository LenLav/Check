import {checkTovar, paymentObject, paymentMethod, nds} from '../index';

const ProductList = () => {
    return (
        <div>
            <div className='check__div'>
                <div className='check__div-tovar-1 info'>№</div>
                <div className='check__div-tovar-2 info' >Наименование</div>
                <div className='check__div-tovar-3 info'>Сумма</div>
            </div>

            <ol style={{ margin: 0, paddingLeft: 0 }}>

                {checkTovar.map((data) =>
                    <div>

                        <div className='check__div' style={{ flexWrap: 'nowrap' }}>
                            <div className='check__div-tovar-1'><li style={{ listStylePosition: 'inside', fontSize: 14, height: 21 }}></li></div>
                            <div className='check__div-tovar-2'>
                                <div className='div_word-wrap'>{data.name}
                                </div>
                            </div>
                            <div className='check__div-tovar-3'>


                                {data.price}₽ × {data.quantity} = <span className='color-darckgreen'>{data.amount}</span>₽
                            </div>
                        </div>

                        <div className='check__div' style={{ flexWrap: 'nowrap' }}>
                            <div className='check__div-tovar-1'></div>




                            {paymentObject.map((object) =>
                                data.paymentObject === object.eng ?
                                    <div className='check__div-tovar-2'>{object.name}</div> : null
                            )}

                            {paymentMethod.map((method) =>
                                data.paymentMethod === method.eng ?
                                    <div className='check__div-tovar-3'>{method.name}</div> : null
                            )}


                        </div>

                        <div className='check__div' style={{ flexWrap: 'nowrap' }}>
                            <div className='check__div-tovar-1'></div>
                            <div className='check__div-tovar-2'></div>

                            {nds.map((nds) =>
                                data.tax.type === nds.eng ?
                                    <div className='check__div-tovar-3'>НДС: {nds.name}</div> : null
                            )}

                        </div>

                        <hr className='hr-horizontal-gradient'></hr>

                    </div>

                )}

            </ol>
        </div>
    )
}

export { ProductList }