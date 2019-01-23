import React, { Component } from 'react';

import Info from './Info/Info';
import Picture from './Picture/Picture';
// import Img2 from './Picture/images/pic2.jpg';

import { Wrapper } from './IndexStyles';

class Contact extends Component {
  state = {
    isHovering: false,
  };

  handleMouseOver = e => {
    setTimeout(() => {
      this.setState({
        isHovering: true,
      });
    }, 200);
  };

  handleMouseOut = () => {
    this.setState({
      isHovering: false,
    });
  };

  render() {
    const { person } = this.props.data;

    return (
      <>
        <Wrapper>
          <Picture />
          <Info data={person} />
        </Wrapper>
      </>
    );
  }
}

export default Contact;
