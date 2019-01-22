import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-spring';

import { NumberToDkk } from '../../../../../../../utils/NumberToDkk';

import {
  Wrapper,
  HeaderWrapper,
  ProjectDetailsWrapper,
  ProjectDetails,
  ProjectNotes,
} from './Styles';

class Details extends React.Component {
  state = {
    isModuleOpen: false,
  };

  render() {
    const {
      projectName,
      clientId,
      caseType,
      status,
      caseResponsiblePartner,
      lawyer,
      invoiced,
      nonInvoiced,
      nonInvoicedExpense,
      balance,
      OpenAccount,
    } = this.props.data;

    return (
      <Transition
        items={this.props.showDetails}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {showDetails =>
          showDetails &&
          (props => (
            <Wrapper style={props}>
              <HeaderWrapper>
                <h3>{projectName}</h3>
                <div onClick={e => this.props.handleDetails(e)}>
                  <p>Close</p>
                </div>
              </HeaderWrapper>
              <ProjectDetailsWrapper>
                <ProjectDetails>
                  <p>Client ID: </p>
                  <p>Case Type: </p>
                  <p>Status: </p>
                  <p>Responsible partner: </p>
                  <p>Lawyer: </p>
                </ProjectDetails>
                <ProjectDetails>
                  <p>{clientId}</p>
                  <p>{caseType}</p>
                  <p>{status}</p>
                  <p>{caseResponsiblePartner}</p>
                  <p>{lawyer}</p>
                </ProjectDetails>
                <ProjectDetails>
                  <p>Invoiced: </p>
                  <p>Non invoiced: </p>
                  <p>Non invoiced Expenses: </p>
                  <p>Balance (+/-): </p>
                  <p>Open account: </p>
                </ProjectDetails>
                <ProjectDetails>
                  <p>{NumberToDkk(invoiced)}</p>
                  <p>{NumberToDkk(nonInvoiced)}</p>
                  <p>{NumberToDkk(nonInvoicedExpense)}</p>
                  <p>{NumberToDkk(balance)}</p>
                  <p>{NumberToDkk(OpenAccount)}</p>
                </ProjectDetails>
              </ProjectDetailsWrapper>
              <p>Note:</p>
              <ProjectNotes />
            </Wrapper>
          ))
        }
      </Transition>
    );
  }
}

export default Details;

Details.propTypes = {
  data: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    clientId: PropTypes.number.isRequired,
    caseType: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    caseResponsiblePartner: PropTypes.string.isRequired,
    lawyer: PropTypes.string.isRequired,
    invoiced: PropTypes.number.isRequired,
    nonInvoiced: PropTypes.number.isRequired,
    nonInvoicedExpense: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    OpenAccount: PropTypes.number.isRequired,
  }),
  handleDetails: PropTypes.func,
};
