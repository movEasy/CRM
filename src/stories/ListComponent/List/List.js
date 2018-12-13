import React, { Component } from 'react';
import styled from 'styled-components';

// Import components
import ListElement from '../ListElement/ListElement';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    ul:nth-child(2n + 1 ) {
        background-color: lightgray;
    }
`;

const Headers = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    padding-left: 0.5rem;
    background-color: #0091DA;
    height: 2rem;
    color: white;

    li {
        flex: 1 1 10rem;
        font-size: 0.8rem;
    }
`;

class List extends Component {

    state = { 
        listStatus: false,
     }

     handleListItemStatus = () => {
         this.setState({
             listStatus: true
         })
     }
    
    render() { 

        const { items, headers } = this.props.data;

        return ( 
            <>
                <Headers>
                        { headers.map(el => <li>{el}</li>) }
                    </Headers>
                <Container>
                    { items.map(el => <ListElement key={el[0]} data={{itemsArray: el}}></ListElement>) }
                </Container>
            </>
         );
    }
}
 
export default List;