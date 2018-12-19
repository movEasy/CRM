import React, { Component } from 'react';
import styled from 'styled-components';

import Info from './Info/Info';
import Picture from './Picture/Picture';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 20rem;
    width: 11rem;
`;

class Contact extends Component {
    state = {  }
    render() { 

        const { person } = this.props.data;

        return ( 
            <Wrapper>
                <Picture />
                <Info data={ person } />
            </Wrapper>
         );
    }
}
 
export default Contact;