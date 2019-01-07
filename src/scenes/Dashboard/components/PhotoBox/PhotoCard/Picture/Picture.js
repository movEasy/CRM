import React from 'react';
import styled from 'styled-components';

import Img1 from './images/pic1.JPG';
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
            <img src={Math.random() >= 0.50 ? Img1 : Img2} alt="test"/>
        </PictureWrapper>
     );
}
 
export default Picture;