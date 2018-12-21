import React from 'react';
import styled from 'styled-components';

import Items from '../Items/Items';

const WrapperDepartment = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;

    max-width: 100%;
    height: 100%;
    overflow-y: scroll;

    div:nth-child(even) {
        background-color: lightgray;
    }
`;

const Overview = ({ data: { departments }, onItemSelect}) => {
    
    return ( 
        <WrapperDepartment>
            {Object.values(departments).map(el => <Items key={Math.random()} onItemSelect={(id) => onItemSelect (id)} data={{ id: el.id, infoItem: el.infoItem }} />)}
        </WrapperDepartment>
     );
}
 
export default Overview;