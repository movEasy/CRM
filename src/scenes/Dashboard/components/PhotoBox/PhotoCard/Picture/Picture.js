import React from 'react';

import Img2 from './images/pic2.jpg';

import { PictureWrapper } from './PictureStyles';

const Picture = () => {
  return (
    <PictureWrapper>
      <img src={Img2} alt="test" />
    </PictureWrapper>
  );
};

export default Picture;
