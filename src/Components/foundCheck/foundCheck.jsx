import React from 'react';

import {typeCheck} from '../../components/foundCheck/index';

import { ProductList } from './blocksFoundCheck/productList'
import { InfoBlock } from './blocksFoundCheck/infoBlock'
import { SummBlock } from './blocksFoundCheck/summBlock'
import { OrganizationBlock } from './blocksFoundCheck/organizationBlock'

const FoundCheck = () => {
    return (
        <div>
            <div className='check zig-zag' id='check'>

                <h2 className='check__h2'>{typeCheck}</h2>

                <hr className="hr-two-gradient"></hr>

                <InfoBlock />

                <hr className="hr-two-gradient"></hr>

                <ProductList />

                <SummBlock />

                <hr className="hr-two-gradient"></hr>

                <OrganizationBlock />

            </div>

        </div>
    )
}

export { FoundCheck }