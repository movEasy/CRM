import React from 'react';

import Item from '../Item/Item';

import { RowWrapper } from './Styles';

const ItemRow = props => {
  const {
    serviceLineId,
    project,
    contact,
    id,
    completed,
    clientId,
  } = props.data;

  let serviceLine;

  switch (serviceLineId) {
    case '0':
      serviceLine = 'Corporate Income Tax';
      break;
    case '1':
      serviceLine = 'Transfer Pricing';
      break;

    case '2':
      serviceLine = 'Mobility';
      break;

    case '3':
      serviceLine = 'VAT';
      break;

    default:
      serviceLine = 'No service line was found';
  }

  return (
    <>
      {props.filtered !== true ? (
        <RowWrapper>
          <Item data={serviceLine} />
          <Item data={project} />
          <Item data={contact} />
        </RowWrapper>
      ) : (
        <RowWrapper
          id={id}
          key={id}
          onClick={e => props.handleProjectDetail(id, e)}
        >
          <Item data={clientId} />
          <Item data={project} />
          <Item data={completed} />
        </RowWrapper>
      )}
    </>
  );
};

export default ItemRow;
