import {checkOrg} from '../index';

const OrganizationBlock = () => {
    return (
        <div className='check__div'>
            <div className='check__div-1 info'>Организация</div>
            <div className='check__div-2'></div>

            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>Наименование</div>
            <div className='check__div-2'>{checkOrg.name}</div>

            <div className='check__div-wrap'></div>{/* перенос */}

            <div className='check__div-1'>ИНН</div>
            <div className='check__div-2'>{checkOrg.inn}</div>

            <div className='check__div-wrap'></div>{/* перенос */}

        </div>
    )
}

export { OrganizationBlock }