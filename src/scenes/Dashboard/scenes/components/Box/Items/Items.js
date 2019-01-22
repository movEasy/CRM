import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { MdCheckCircle } from 'react-icons/md';

import { ItemWrapper, ItemWrapperDepartments, HoverTask } from './ItemStyles';

class Items extends Component {
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
    const { id, infoItem, status } = this.props.data;

    let item;
    if (this.props.styleHack === 'departments') {
      item = (
        <ItemWrapperDepartments
          key={Math.random()}
          onClick={() => this.props.onItemSelect(id)}
        >
          {infoItem.map((el, i) =>
            i === 0 && status === 'notComplete' ? (
              <span keys={Math.random()}>
                <MdCheckCircle className="not-complete" />
                {el}
              </span>
            ) : i === 0 && status === 'complete' ? (
              <span keys={Math.random()}>
                {' '}
                <MdCheckCircle className="complete" />
                {el}
              </span>
            ) : (
              <span keys={Math.random()}>
                <p>{el}</p>
              </span>
            )
          )}
        </ItemWrapperDepartments>
      );
    } else {
      item = (
        <>
          <ItemWrapper key={id}>
            {infoItem.map((el, i) =>
              i === 0 && status === 'notComplete' ? (
                <span keys={Math.random()}>
                  <MdCheckCircle className="not-complete" />
                  <p>{el}</p>
                </span>
              ) : i === 0 && status === 'complete' ? (
                <span keys={Math.random()}>
                  {' '}
                  <MdCheckCircle className="complete" />
                  {el}
                </span>
              ) : (
                <span keys={Math.random()}>
                  <p>{el}</p>
                </span>
              )
            )}
          </ItemWrapper>
        </>
      );
    }

    return (
      <>
        {item}
        {this.state.isHovering && (
          <HoverTask key="3">
            <h3>Ryk Flack for om vi skal lave et TP Review</h3>
            <div className="task-hover__date-and-person">
              <span>
                <p>Deadline: 31-12-2019</p>
              </span>
              <span>
                <p>Oprettet af: Henrik Lund</p>
              </span>
            </div>
            <div className="task-hover__text-area">
              <textarea />
            </div>
            <div className="task-hover__submit">
              <button>Fuldført</button>
            </div>
          </HoverTask>
        )}
      </>
    );
  }
}

Items.propTypes = {};

export default Items;
