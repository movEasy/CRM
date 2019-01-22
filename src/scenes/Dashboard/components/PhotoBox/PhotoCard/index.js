import React, { Component } from 'react';

import Info from './Info/Info';
import Picture from './Picture/Picture';
// import Img2 from './Picture/images/pic2.jpg';

import {
  Wrapper,
  //   HoverInformation,
  //   ContactPersonContainer,
  //   ContactHeader,
  //   ContactPersonInfo,
  //   ContactPersonBottom,
} from './IndexStyles';

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
        {/* {this.state.isHovering ? <HoverInformation>
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
                </HoverInformation> : null} */}
      </>
    );
  }
}

export default Contact;
