import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
width: 20rem;
height: 14rem;
`;

export const HoverInformation = styled.div`
position: absolute;
top: 50%;
left: 35%;
background-color: white;
border: 1px solid black;
width: 50rem;
height: 40rem;
z-index: 500;
display: flex;
flex-direction: column;
padding-left: 2rem;
padding-right: 2rem;
`;

export const ContactPersonContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;

hr.contact-person__hr {
    width: 100%;
}
`;

export const ContactHeader = styled.div`
display: flex;
justify-content: space-between;
height: 35%;
margin-top: 1rem;
margin-bottom: 1rem;

img {
    width: 20%;
}

div.contact-person__info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    flex: 2;
    margin-left: 1rem;
    
    h3 {
        margin: 0;
        color: ${ props => props.theme.darkBlue}
    }

    p {
        margin: 0;
        font-size: 1.3rem;
    }
}
`;


export const ContactPersonInfo = styled.div`
display: flex;
justify-content: space-between;
height: 100%;

div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

div > p {
    margin: 0;
    margin-left: 1.5rem;
}

div > h5 {
    margin: 0;
}
`;

export const ContactPersonBottom = styled.div`
height: 20%;
display: flex;
justify-content: space-between;
align-items: center;

button {
    border: 1px solid black;
    width: 15rem;
    height: 3rem;
}
`;