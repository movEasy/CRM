import React from 'react';
import { storiesOf } from '@storybook/react';

import BarChart from './BarChart';

storiesOf('Charts', module)
    .add('Bar', () => <BarChart />);