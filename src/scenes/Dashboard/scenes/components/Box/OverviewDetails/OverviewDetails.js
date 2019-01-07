import React from 'react';
import styled from 'styled-components';
import { MdKeyboardReturn } from 'react-icons/md';

import ItemDetails from '../ItemDetails/ItemDetails';

const WrapperDetails = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    /* justify-content: flex-end; */

    max-width: 100%;
    height: 100%;
    overflow-y: scroll;

    div.button__wrapper {
        display: flex;
        justify-content: flex-end;
        height: 10%;
        padding: 1rem;
        margin-bottom: 1rem;
    }
`;


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