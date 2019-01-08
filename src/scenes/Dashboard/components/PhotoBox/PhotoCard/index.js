import React, { Component } from 'react';
import styled from 'styled-components';

import Info from './Info/Info';
import Picture from './Picture/Picture';
import Img2 from './Picture/images/pic2.jpg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 14rem;
    height: 24rem;
    border: 1px solid black;
`;

const HoverInformation = styled.div`
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

const ContactPersonContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    hr.contact-person__hr {
        width: 100%;
    }
`;

const ContactHeader = styled.div`
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


const ContactPersonInfo = styled.div`
    display: flex;
    justify-content: space-between;
    height: 45%;

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

const ContactPersonBottom = styled.div`
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

class Contact extends Component {
    state = { 
        isHovering: false,
    }

    handleMouseOver = (e) => {
        setTimeout(() => {
            this.setState({
                isHovering: true,
            })
        }, 200)
    }

    handleMouseOut = () => {
        this.setState({
            isHovering: false,
        });
    }

    render() { 

        const { person } = this.props.data;

        return (
            <>
                <Wrapper onMouseEnter={(key) => this.handleMouseOver(key)} onMouseLeave={this.handleMouseOut}>
                    <Picture />
                    <Info data={ person } />
                </Wrapper>
                {this.state.isHovering ? <HoverInformation>
                    <ContactPersonContainer>
                        <ContactHeader>
                            <img src={Img2} alt='contact person' />
                            <div className='contact-person__info'>
                                <h3>Jesper Arnø</h3>
                                <p>KPMG Acor Tax</p>
                                <p>Partner</p>
                                <p>+45 5374 7021</p>
                                <p>+jesper.arno@kpmg.com</p>
                            </div>
                        </ContactHeader>
                        <hr className='contact-person__hr'/>
                        <ContactPersonInfo>
                            <div className="left">
                                <h5>LinkedIn connections</h5>
                                <p>Jesper Arnø</p>
                                <p>Pia Konnerup</p>
                                <p>Birger Jensen</p>
                                <p>Henrik Højholm</p>
                            </div>
                            <div className="right">
                                <h5>Nyhedsbreve (Apsis)</h5>
                                <p>VAT</p>
                                <p>TP</p>
                                <p>Mobility - Social Sikring</p>
                            </div>
                        </ContactPersonInfo>
                        <ContactPersonBottom>
                            <button>Fjern fra feed</button>
                            <button>Notificer markets</button>
                        </ContactPersonBottom>
                    </ContactPersonContainer>
                </HoverInformation> : null}

            </>
         );
    }
}
 
export default Contact;