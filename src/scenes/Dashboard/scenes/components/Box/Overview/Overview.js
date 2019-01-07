import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import Items from '../Items/Items';

const WrapperDepartment = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;

    max-width: 100%;
    height: 100%;
    max-height: 15rem;
    overflow-y: scroll;

    div:nth-child(even) {
        background-color: #ededea;
    }
`;

const Overview = (props) => {

    return ( 
        <WrapperDepartment>
            {_.values(props.data).map(el => 
                <Items 
                    key={Math.random()} 
                    onItemSelect={(id) => props.onItemSelect (id)}
                    data={{ id: el.id, infoItem: el.infoItem, status: el.status }}
                    styleHack={props.styleHack}
                    isHover={props.isHover}
                />
            )}
        </WrapperDepartment>
     );
}
 

export default Overview;