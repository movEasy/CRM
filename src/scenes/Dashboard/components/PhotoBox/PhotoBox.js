import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';

import Contact from './PhotoCard/index';

const WrapperPhotoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    min-width: 100%;
    min-height: 25rem;
    padding-left: ${props => props.theme.paddingContainer};
    padding-right: ${props => props.theme.paddingContainer};
    


    button.left {
        cursor: pointer;
        position: absolute;
        left: 2rem;
        width: 5rem;
        height: 5rem;
    }

    button.right {
        cursor: pointer;
        position: absolute;
        right: 2rem;
        width: 5rem;
        height: 5rem;
    }
`;

class PhotoBox extends Component {
    
    state = {  
        start: 0,
        end: 6
    }

    handlePhotoEnd = (e) => {
        const name = e.target.name;

        const photoArrLength = _.values(this.props.data).length;
        
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

        let slicedData = _.values(data).slice(start, end);
        
        return (
            <WrapperPhotoBox>
                <button className='left' value='back' name='back' onClick={this.handlePhotoEnd}> i </button>
                { Object.keys(slicedData).map( val => <Contact key={Math.random()} data={ { person: slicedData[val] } } />)}
                <button className='right' value='next' name='next' onClick={this.handlePhotoEnd}> i </button>
            </WrapperPhotoBox>
         );
    }
}
 
export default PhotoBox;