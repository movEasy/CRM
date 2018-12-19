import React from 'react';
import styled from 'styled-components';

const PictureWrapper = styled.div`
    height: 50%;
    width: 100%;

    background-color: lightgray;
`;

const Picture = () => {
    return ( 
        <PictureWrapper>
            <img href="" alt="test"/>
        </PictureWrapper>
     );
}
 
export default Picture;