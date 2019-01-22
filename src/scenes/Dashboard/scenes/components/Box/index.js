import React, { Component } from 'react';

import Overview from './Overview/Overview';
import OverviewDetails from './OverviewDetails/OverviewDetails';
import { WrapperMain, Header, ButtonWrapper } from './indexStyles';

const id2 = [
  ['4016872', 'Siemens/MD/Christiaan Torres Stocki', 'complete'],
  ['4014128-1204', 'Corp-AP Pension-Various tax advice', 'complete'],
];

const id3 = [
  ['4016146', 'M&PS-Nielse Soelberg', 'complete'],
  ['4016146', 'M&PS Siemens Project 7P', 'notComplete'],
];

class Main extends Component {
  state = {
    departmentSelected: false,
    id: '',
  };

  handleDepartmentSelect = id => {
    this.setState(prevState => ({
      departmentSelected: !prevState.departmentSelected,
      id,
    }));
  };

  handleOverview = () => {
    this.setState({
      departmentSelected: false,
      id: '',
    });
  };

  render() {
    // const { departments } = this.props.data;
    const { headers } = this.props;
    const { departmentSelected, id } = this.state;

    let dataDetails;

    switch (id) {
      case '1':
        dataDetails = this.props.data.department1.details;
        break;
      case '2':
        dataDetails = id2;
        break;
      case '3':
        dataDetails = id3;
        break;
      default:
        dataDetails = '';
    }

    let box;

    if (departmentSelected) {
      box = (
        <WrapperMain>
          <OverviewDetails
            data={{ details: dataDetails }}
            onItemSelect={id => this.handleDepartmentSelect(id)}
            returnIndex={this.handleOverview}
          />
        </WrapperMain>
      );
    } else {
      box = (
        <WrapperMain>
          <Header>
            {headers.map(el => (
              <h4 keys={Math.random()}>{el}</h4>
            ))}
            <div />
          </Header>
          <Overview
            data={this.props.data}
            styleHack={this.props.styleHack}
            onItemSelect={id => this.handleDepartmentSelect(id)}
          />
          {this.props.styleHack === 'tasks' ? (
            <ButtonWrapper>
              <button>+ Create new task</button>
            </ButtonWrapper>
          ) : (
            ''
          )}
        </WrapperMain>
      );
    }

    return box;
  }
}

export default Main;
