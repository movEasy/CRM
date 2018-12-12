import React from 'react'
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

// Import Logo
import Logo from '../../../components/Logo/Logo';

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
    background-color: ${props => props.theme.darkBlue};
    padding-left: ${props => props.theme.paddingContainer};
    padding-right: ${props => props.theme.paddingContainer};
	height: 10vh;
	
	svg {
		width: 3rem;
		height: 2.5rem;
		color: ${ props => props.theme.white };
		cursor: pointer;
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
    		<Logo />
    		<IoIosSearch />
    	</HeaderContainer>
  	)
}

export default Header;