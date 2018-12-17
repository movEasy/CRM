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

    const { isSelected, handleElementSelect, info, details} = props;

    let item;
    // console.log(details.map(el => console.log(el)));
    console.log(details.map(el => console.log(el)))

    if ( isSelected ) {
        item = (<Item>
            {
                
            }
        </Item>
        )
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

    )
}


export default BoxItem;