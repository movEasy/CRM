import React from 'react';
import _ from 'lodash';

import Items from '../Items/Items';
import { WrapperDepartment } from './OverviewStyles';

const Overview = props => {
  return (
    <WrapperDepartment>
      {_.values(props.data).map(el => (
        <Items
          key={Math.random()}
          onItemSelect={id => props.onItemSelect(id)}
          data={{ id: el.id, infoItem: el.infoItem, status: el.status }}
          styleHack={props.styleHack}
        />
      ))}
    </WrapperDepartment>
  );
};

export default Overview;
