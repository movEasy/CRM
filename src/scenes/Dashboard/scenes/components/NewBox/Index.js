import React from 'react';
import _ from 'lodash';

import {
  serviceLineData,
  headers,
  serviceLine,
} from '../../../services/DummyDataNewBox';

import ItemRow from './components/ItemRow/ItemRow';
import Details from './components/DetailsModule/DetailsModule';

import {
  Wrapper,
  ItemRowWrapper,
  Button,
  ButtonWrapper,
  HeaderWrapper,
} from './Styles.js';

import { countProjects } from './utils/filterFunction';

class NewBox extends React.Component {
  state = {
    data: serviceLineData,
    headers: headers,
    isFiltered: false,
    showDetails: false,
    projectDetails: {},
  };

  handleClickState = () => {
    this.setState(prevState => ({
      isFiltered: !prevState.isFiltered,
      data: serviceLineData,
      headers: headers,
    }));
  };

  handleServiceLineFilter = e => {
    const id = e.target.id;

    let filtered = _.values(serviceLineData).filter(
      el => el.serviceLineId === id
    );

    if (filtered.length > 0) {
      this.setState({
        data: filtered,
        isFiltered: true,
        headers: serviceLine[id],
      });
    }
  };

  handleShowProjectDetails = id => {
    console.log(id);
    if (this.state.showDetails === false) {
      let projectDetails = _.values(serviceLineData).filter(el => el.id === id);
      projectDetails = projectDetails[0].details;
      this.setState({
        showDetails: true,
        projectDetails,
      });
    } else {
      this.setState({
        showDetails: false,
      });
    }
  };

  render() {
    const { isFiltered, headers, showDetails, projectDetails } = this.state;
    console.log(showDetails);
    console.log(projectDetails);
    let headersCase = 'Something when wrong';
    let btnCase = 'Something when wrong';

    switch (isFiltered) {
      case false:
        headersCase = (
          <>
            <HeaderWrapper>
              {isFiltered === false ? (
                _.values(this.state.headers).map(el => (
                  <h4 key={Math.random()}>{el}</h4>
                ))
              ) : (
                <h4>{headers}</h4>
              )}
            </HeaderWrapper>
          </>
        );
        btnCase = (
          <ButtonWrapper>
            {serviceLine.map((el, i) => (
              <Button
                id={i}
                medium
                white
                onClick={id => this.handleServiceLineFilter(id)}
              >{`${el} - ${countProjects(el)} Projects`}</Button>
            ))}
          </ButtonWrapper>
        );
        break;
      case true:
        headersCase = (
          <>
            <HeaderWrapper>
              <h4>{headers}</h4>
            </HeaderWrapper>
          </>
        );
        btnCase = (
          <ButtonWrapper>
            <Button medium white onClick={this.handleClickState}>
              Back
            </Button>
          </ButtonWrapper>
        );
        break;
      default:
        return headersCase;
    }

    return (
      <>
        <Wrapper>
          {headersCase}
          <ItemRowWrapper>
            {_.values(this.state.data).map(el => (
              <ItemRow
                handleProjectDetail={e => this.handleShowProjectDetails(e)}
                filtered={this.state.isFiltered}
                key={el.id}
                data={el}
                showDetails={this.state.showDetails}
                details={this.state.projectDetails}
              />
            ))}
          </ItemRowWrapper>
          {btnCase}
        </Wrapper>
        {showDetails === true ? (
          <Details
            showDetails={showDetails}
            data={projectDetails}
            handleDetails={e => this.handleShowProjectDetails(e)}
          />
        ) : (
          ''
        )}
      </>
    );
  }
}

export default NewBox;
