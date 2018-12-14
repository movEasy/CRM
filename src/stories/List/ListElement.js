import React, { Component } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    width: 100%;

    cursor: pointer;

    :hover {
        color: #4FB3E5;
    }

`;

const DataElements = styled.li`
    list-style: none;
    display: flex;
    padding-left: 1rem;
    flex: 1 1 10rem;
`;

const DataExpanded = styled.div`
    background-color: #F0F9FD !important;
    padding-left: 1rem;
    padding-right: 1rem;

    p {
        color: #0091DA;
        font-weight: 600;
    }

    span {
        color: #4FB3E5;
        font-weight: 400;
    }
`;

class ListElement extends Component {
    state = { isOpen: false }

    handleIsOpen = () => {
        this.setState( prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    render() { 

        const { isOpen } = this.state;
        const { titles, details } = this.props.data;

        let dataExpanded = (
            <DataExpanded>
                <p>Adresse: <span>{details.adresse}</span></p>
                <p>Postnr & By: <span>{details.postNrBy}</span></p>
                <p>Indirekte besiddelser: <span>{details.indirekteBesiddelse}</span></p>
                <p>Andre rettigheder: <span>{details.andreRettigheder}</span></p>
            </DataExpanded>
        )

        return ( 
            <>
                <Wrapper onClick={this.handleIsOpen}>
                    {titles.map(el => <DataElements> {isOpen && el === 'Info' ? (<span><MdKeyboardArrowUp/> {el}</span>) : !isOpen && el === 'Info' ? (<span><MdKeyboardArrowDown/> {el}</span>) : el} </DataElements>)}
                </Wrapper>
                {isOpen === true ? dataExpanded : ''}
            </>
        );
    }
}

export default ListElement;