import React from 'react';

import { MdCheckCircle } from 'react-icons/md';

import { ItemElement } from './Styles';

const Item = props => {
  const { data } = props;
  return (
    <ItemElement>
      {data === false ? (
        <MdCheckCircle className="unCompleted" />
      ) : data === true ? (
        <MdCheckCircle className="completed" />
      ) : (
        data
      )}
    </ItemElement>
  );
};

export default Item;
