import React from 'react';
import PropTypes from 'prop-types';
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
    max-height: 6rem;
    min-height: 4rem;

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

    span {
        max-height: 6rem;

        p {
            margin: 0;
        }
    }

    span:nth-child(1) {
        flex: 1;
    }

    span:nth-child(2) {
        flex: 2;
        text-align: center;
    }

    span:nth-child(3) {
        flex: 2;
        text-align: left;
    }

`;

const ItemWrapperDepartments = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;

    padding-left: 1rem;
    padding-right: 1rem;

    margin-left: 1rem;
    margin-right: 1rem;

    flex: 1 1 auto;
    max-height: 6rem;
    min-height: 4rem;

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

    span {
        max-height: 6rem;
        flex: 1;

        p {
            margin: 0;
        }
    }

    span:last-child {
        text-align: center;
    }

`;

const Items = (props) => {
    const { id, infoItem, status } = props.data;

    let item;
    if ( props.styleHack === 'departments' ) {
        item = (
        <ItemWrapperDepartments key={Math.random()} onClick={() => props.onItemSelect(id)}>
            { infoItem.map((el, i) => i === 0 && status === 'notComplete' ? 
                    <span><MdCheckCircle className='not-complete'/>{el}</span> :
                i === 0 && status === 'complete' ?
                    <span> <MdCheckCircle className='complete' />{el}</span> :
                    <span><p>{el}</p></span>)}
        </ItemWrapperDepartments>
        )
    } else {
        item = (
        <ItemWrapper key={Math.random()} onClick={() => props.onItemSelect(id)}>
            { infoItem.map((el, i) => i === 0 && status === 'notComplete' ? 
                    <span><MdCheckCircle className='not-complete'/>{el}</span> :
                i === 0 && status === 'complete' ?
                    <span> <MdCheckCircle className='complete' />{el}</span> :
                    <span><p>{el}</p></span>)}
        </ItemWrapper>
        )
    }

    return ( 
        item
     );
}

Items.propTypes = {

}

export default Items;