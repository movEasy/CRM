import React from 'react';
import { MdKeyboardReturn } from 'react-icons/md';

import ItemDetails from '../ItemDetails/ItemDetails';
import { WrapperDetails } from './OverviewDetailsStyles';


const OverviewDetails = ({ data: { details }, returnIndex }) => {

    return ( 
        <WrapperDetails>
            <div className='button__wrapper'>
                <MdKeyboardReturn onClick={returnIndex} />
            </div>
            { Object.keys(details).map(el => <ItemDetails keys={Math.random()} data={ {id: '1', item: details[el]} } />)}
        </WrapperDetails>
     );
}
 
export default OverviewDetails;