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

const ListElement = ({ data: { itemsArray }}) => {

    

    return ( 
        <Container>
            { itemsArray.map(el => <ListItem data={{title: el}} />) }
        </Container>
     );
}
 
export default ListElement;