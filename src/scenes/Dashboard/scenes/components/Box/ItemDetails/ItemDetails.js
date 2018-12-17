import React from 'react'
import styled from 'styled-components';
import { MdCheckCircle } from 'react-icons/md';

const ItemDetailsWrapper = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    align-items: flex-start;

    padding-left: 1rem;
    padding-right: 1rem;
    /* flex: 1 0 auto; */
    max-height: 10%;

    :hover {
        color: blueviolet;
    }

    svg {
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

const ItemDetails = ({ data:{ id, item} }) => {
    return ( 
        <ItemDetailsWrapper key={id}>
            { item.map(el => el === 'notComplete' ? <MdCheckCircle className='not-complete'/> : el === 'complete' ? <MdCheckCircle className='complete' /> :  <p>{el}</p>)}
        </ItemDetailsWrapper>
     );
}
 
export default ItemDetails;