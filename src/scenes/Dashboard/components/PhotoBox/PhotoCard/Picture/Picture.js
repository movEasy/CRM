import React from 'react';
import styled from 'styled-components';

import Img2 from './images/pic2.jpg';

const PictureWrapper = styled.div`
    height: 60%;
    background-color: lightgray;

    img {
        width: 100%;
        height: 100%;
    }
`;

const Picture = () => {
    return ( 
        <PictureWrapper>
            <img src={Img2} alt="test"/>
        </PictureWrapper>
     );
}
 
export default Picture;