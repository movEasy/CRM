import React, { Component } from 'react';
import styled from 'styled-components';

import ListElement from './ListElement';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50rem;
`;

const Headers = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #0091DA !important;
    height: 4rem;
    align-items: center;

    li {
        padding-left: 1rem;
        list-style: none;
        flex: 1 1 10rem;
        color: white;
    }
`;

const UlContainer = styled.ul`
    display: flex;
    flex-direction: column;
    
    margin: 0;
    padding: 0;

    div:nth-child(2n + 1 ) {
        background-color: lightgray;
    }
`;

const Button = styled.button`
    width: 10rem;
    height: 2rem;
    cursor: pointer;
    margin: 1rem 0 1rem 0;
    background-color: #0091DA;
    color: white;
    border: none;
    border-radius: 0.5rem;

`;

class List extends Component {

    state = {
        showAll: false,
    }

    handleShowAll = () => {
        this.setState( prevState => ({
            showAll: !prevState.showAll,
        }))
    }

    render() {

        const { data } = this.props;
        const { showAll } = this.state;

        let objLength = Object.entries(data).slice(1).length;
        let dataWithoutHeaders = Object.values(data).slice(1);
    
        let dataObjShortend = Object.values(dataWithoutHeaders).slice(0,5);
        
        let payload;

        if ( showAll ) {
            payload = dataWithoutHeaders;
        } else {
            payload = dataObjShortend;
        }

        return ( 
            <Container>
                <UlContainer>
                    <Headers>
                        { data.headers.map(el => <li>{el}</li>)}
                    </Headers>
    
                    {/* { objLength >= 5 ? Object.entries(dataObjShortend).map(el => <ListElement data={el[1]} />) : Object.entries(data).slice(1).map(el => <ListElement data={el[1]} />)} */}

                    { Object.entries(payload).map(el => <ListElement data={el[1]} />) }

                </UlContainer>
                <Button onClick={this.handleShowAll}>Show all</Button>
            </Container>
        );
    }
} 

export default List;