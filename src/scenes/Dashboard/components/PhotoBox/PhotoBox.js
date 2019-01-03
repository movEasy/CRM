import React, { Component } from 'react';
import styled from 'styled-components';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';

import Contact from './PhotoCard/index';

const WrapperPhotoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    min-width: 100%;
    min-height: 100%;

    svg {
        cursor: pointer;
    }

    button {
        border: none;
        background-color: transparent;
        font-size: 2rem;
    }
`;

class PhotoBox extends Component {
    
    state = {  
        start: 0,
        end: 5
    }

    handlePhotoEnd = (e) => {
        const name = e.target.name;

        const photoArrLength = Object.values(this.props.data).length;
        
        if ( name === 'next') {
            this.setState( prevState => ({
                start: prevState.end === photoArrLength ? prevState.start : prevState.start + 1,
                end: prevState.end === photoArrLength ? prevState.end : prevState.end + 1
            }))
        } else if ( name === 'back') {
            this.setState( prevState => ({
                start: prevState.start === 0 ? prevState.start : prevState.start - 1,
                end: prevState.start === 0 ? prevState.end : prevState.end - 1
            }))
        }
    }

    render() { 

        const { data } = this.props;
        const { start, end } = this.state;

        let slicedData = Object.values(data).slice(start, end);
        
        return ( 
            <WrapperPhotoBox>
                <button value='back' name='back' onClick={this.handlePhotoEnd}> back </button>
                { Object.values(slicedData).map( val => <Contact key={Math.random()} data={ { person: val } } />)}
                <button value='next' name='next' onClick={this.handlePhotoEnd}> next </button>
            </WrapperPhotoBox>
         );
    }
}
 
export default PhotoBox;