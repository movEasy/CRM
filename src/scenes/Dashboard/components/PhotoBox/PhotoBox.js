import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import Img1 from './img/symbol1.png';
import Img2 from './img/symbol2.png';

import Contact from './PhotoCard/index';

const WrapperPhotoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    width: 100%;
    min-height: 25rem;
    padding-left: ${props => props.theme.paddingContainer};
    padding-right: ${props => props.theme.paddingContainer};
    
    svg {
        cursor: pointer;
        width: 4rem;
        height: 3rem;
    }


    img.left {
        cursor: pointer;
        position: absolute;
        left: 5rem;
        width: 2rem;
        height: 2rem;
        
    }

    img.right {
        cursor: pointer;
        position: absolute;
        right: 5rem;
        width: 2rem;
        height: 2rem;
    }
`;

class PhotoBox extends Component {
    
    state = {  
        start: 0,
        end: 6
    }

    handlePhotoEnd = (e) => {
        console.log(e.target.name)
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
                {/* <button className='left' value='back' name='back' onClick={this.handlePhotoEnd}> i </button> */}
                <img className='left' src={Img1} alt='back' value='back' name='back' onClick={this.handlePhotoEnd} />
                { Object.keys(slicedData).map( val => <Contact key={Math.random()} data={ { person: slicedData[val] } } />)}
                <img className='right' src={Img2} alt='next' value='next' name='next' onClick={this.handlePhotoEnd} />
                {/* <button className='right' value='next' name='next' onClick={this.handlePhotoEnd}> </button> */}
            </WrapperPhotoBox>
         );
    }
}
 
export default PhotoBox;