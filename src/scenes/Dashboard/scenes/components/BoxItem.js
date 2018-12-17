import React from 'react'
import styled from 'styled-components';
import { MdCheckCircle } from 'react-icons/md';

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    height: 2rem;

    :hover {
        color: ${ props => props.theme.mediumBlue }
    }

    svg {
        width: 1.2rem;
        height: 1.2rem;
        
        &.complete {
            color: green;
        }

        &.notComplete {
            color: red;
        }
    }
`;

const BoxItem = (props) => {

    const { isSelected, handleElementSelect, info} = props;

    let item;

    if ( isSelected ) {
        item = ('')
    } else {
        item = (
            <Item onClick={ handleElementSelect }>
                {info.map(el => {
                    return <p>{el}</p>
                })}
            </Item>
        )
    }

    return (

        item
        // <Item key={props.info[0]} onClick={() => props.selectItem(props.info[0])}>
        //     {props.info.map(el => {
        //         return el === 'complete' ? <MdCheckCircle className='complete' key={Math.random()}/> : el === 'notComplete' ? <MdCheckCircle className='notComplete' key={Math.random()} /> :  <div key={Math.random()}>{el}</div>
        //     })}
        // </Item>
    )
}


export default BoxItem;