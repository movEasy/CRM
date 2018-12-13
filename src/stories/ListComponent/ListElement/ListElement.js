import React from 'react';
import styled from 'styled-components';

// Import components
import ListItem from '../ListItem/ListItem';

const Container = styled.ul`
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 2rem;
    cursor: pointer;
    padding-left: 0.5rem;

    :hover {
        color: #0091DA;
        opacity: 0.9;
    }

`;

const ContainerOpened = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 2rem;
    cursor: pointer;
    padding-left: 0.5rem;
    height: 11rem;
    background-color: #F0F9FD;

    h5 {
        color: #0091DA;
        padding: 1rem;
    }

    p {
        color: black;
    }
`;

const ListElement = ({ data: { itemsArray, dataOpen, state }, onItemState, onCloseItem}) => {

    let listElement;

    if (state === 'CLOSED') {
        listElement = (
            <Container onClick={() => onItemState(state)}>
                { itemsArray.map(el => <ListItem data={{title: el}} />) }
            </Container>
        )
    } else if (state === 'OPEN') {
        listElement = (
            <ContainerOpened onClick={() => onItemState(state)}>
                <h5>Adresse: <p>{dataOpen.adresse}</p></h5>
                <h5>Postnr & By: <p>{dataOpen.postNrBy}</p></h5>
                <h5>Indirekte besiddelser: <p>{dataOpen.indirekteBesiddelse}</p></h5>
                <h5>Andre rettigheder: <p>{dataOpen.andreRettigheder}</p></h5>
            </ContainerOpened>
        )
    } else {
        listElement = (
            <ContainerOpened onClick={() => onItemState(state)}>
                <h5>Adresse: <p>{dataOpen.adresse}</p></h5>
                <h5>Postnr & By: <p>{dataOpen.postNrBy}</p></h5>
                <h5>Indirekte besiddelser: <p>{dataOpen.indirekteBesiddelse}</p></h5>
                <h5>Andre rettigheder: <p>{dataOpen.andreRettigheder}</p></h5>
            </ContainerOpened>
        )
    }

    return ( 
        listElement
     );
}
 
export default ListElement;