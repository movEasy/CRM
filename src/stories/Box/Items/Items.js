import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: space-between;

    padding-left: 1rem;
    padding-right: 1rem;
    flex: 1 0 auto;
    max-height: 20%;

    :hover {
        color: blueviolet;
    }

`;

const Items = ({ data: { id, infoItem }, onItemSelect }) => {
    return ( 
        <ItemWrapper key={Math.random()} onClick={() => onItemSelect(id)}>
            { infoItem.map(el => <p>{el}</p>)}
        </ItemWrapper>
     );
}
 
export default Items;