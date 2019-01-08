import React from 'react'
import styled from 'styled-components';
import { MdEditLocation } from 'react-icons/md';

const Container = styled.div`
    display: flex;
    padding-left: ${props => props.theme.paddingContainer};
    padding-right: ${props => props.theme.paddingContainer};
    background-color: ${ props => props.theme.white };
    justify-content: space-between;
    align-items: center;
    height: 15vh;
`;

const CompanyInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;

    h1 {
        /* margin-bottom: -1rem; */
        margin: 0;
    }

    h5 {
        margin: 0;
        color: ${ props => props.theme.lightGray }
    }
`;

const ProjectResponsible = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
        margin: 0;
        margin-bottom: 1-rem;
    }

    h4 {
        margin: 0;
        color: ${ props => props.theme.black }
    }
`;

const Socials = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: ${ props => props.theme.lightBlue };

    span {
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        font-size: 1.2rem;
        
        p {
            padding: 0 0.5rem 0 0.5rem;
        }

        p::after {
            content: '|';
            color: ${ props => props.theme.lightGray };
            padding-left: 1rem;
        }
    }
`;

const CompanyHeadline = () => {
  return (
    <Container>
      <CompanyInfo>
          <h1>FALCK A/S</h1>
          <h5>C/O Falckhuset | Polititorvet 1 | 1567 København V</h5>
      </CompanyInfo>
      <ProjectResponsible>
          <p>Client responsible:</p>
          <h4>Pia Konnerup</h4>
          <Socials>
            <span>
                <MdEditLocation />
                <p>Vis på kort</p>
                <MdEditLocation />
                <p>www</p>
                <MdEditLocation />
                <p>LinkedIn</p>
            </span>
          </Socials>
      </ProjectResponsible>
    </Container>
  )
}

export default CompanyHeadline;