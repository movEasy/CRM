import React from 'react';
import PropTypes from 'prop-types';

import { InfoWrapper } from './InfoStyles';

const Info = ({ data }) => {
  return (
    <InfoWrapper>
      <div>
        <p>{data.name}</p>
      </div>
      <div>
        <p>{data.company}</p>
        <p>{data.position}</p>
      </div>
      <div>
        <p>{data.tel}</p>
        <p>{data.mail}</p>
      </div>
    </InfoWrapper>
  );
};

Info.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
  }),
};

export default Info;
