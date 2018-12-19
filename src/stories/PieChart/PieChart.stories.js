import React from 'react';
import { storiesOf } from '@storybook/react';

import PieChart from './PieChart';

storiesOf('Charts', module)
    .add('Pie', () => <PieChart />);