import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 5rem;
    background-color: ${ props => props.theme.black }
`;

const NavItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${props => props.theme.paddingContainer};
    padding-right: ${props => props.theme.paddingContainer};
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
`;

const Bar = styled.div`
    a {
        color: ${ props => props.theme.white };
        flex: 1 1 auto;
        font-size: 1rem;
    }
`;

const Navigation = () => {
    return (
        <Container>
            <NavItems>
                <Bar><a href='/'>VIRKSOMHED</a></Bar>
                <Bar><a href='/'>INFO</a></Bar>
                <Bar><a href='/'>PERSONKREDS</a></Bar>
                <Bar><a href='/'>EJERE</a></Bar>
                <Bar><a href='/'>P-ENHEDER</a></Bar>
                <Bar><a href='/'>REGISTRERINGSHISTORIK</a></Bar>
                <Bar><a href='/'>HISTORISK STAMDATA</a></Bar>
                <Bar><a href='/'>ANTAL ANSATTE</a></Bar>
            </NavItems>
        </Container>
    )
}

export default  Navigation;