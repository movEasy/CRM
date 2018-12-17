import React from 'react';
import styled from 'styled-components';

import ItemDetails from '../ItemDetails/ItemDetails';

const WrapperDetails = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;

    max-width: 100%;
    height: 100%;
    overflow-y: scroll;
`;

const OverviewDetails = ({ data: { details } }) => {

    return ( 
        <WrapperDetails>
            { Object.values(details).map(el => <ItemDetails data={ {id: '1', item: el} } />)}
        </WrapperDetails>
     );
}
 
export default OverviewDetails;