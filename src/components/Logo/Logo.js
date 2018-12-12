import React from 'react'
import styled from 'styled-components';

import logo from '../../assets/KPMG_logo_white_small.png';
// import { ReactComponent as Logo1 } from '../../assets/KPMG_logo_white_small.svg';

const Image = styled.img`
    width: 12rem;
    height: auto;
`;

const Logo = () => (
    <Image src={logo} alt='KPMG Logo' />
)

export default Logo;