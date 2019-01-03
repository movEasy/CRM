import React from 'react';
import styled from 'styled-components';
import { MdCheckCircle } from 'react-icons/md';

const ItemWrapper = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;

    padding-left: 1rem;
    padding-right: 1rem;

    margin-left: 1rem;
    margin-right: 1rem;

    flex: 1 1 auto;
    max-height: 10%;

    :hover {
        color: blueviolet;
    }

    font-size: 1rem;

    svg {
        position: relative;
        top: 1;
        left: 0;
        width: 1.2rem;
        height: 1.2rem;
        
        &.complete {
            color: green;
        }

        &.not-complete {
            color: red;
        }
    }

`;

const Items = ({ data: { id, infoItem, status }, onItemSelect }) => {
    let stat = status;

    return ( 
        <ItemWrapper key={Math.random()} onClick={() => onItemSelect(id)}>
            { infoItem.map((el, i) => i === 0 && stat === 'complete' ? <span><MdCheckCircle className='not-complete'/>{el}</span> : i === 0 && stat === 'complete' ? <span> <MdCheckCircle className='complete' /> {el} </span> : <p>{el}</p>)}
        </ItemWrapper>
     );
}
 
export default Items;