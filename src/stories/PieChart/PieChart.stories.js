import React from 'react';
import { storiesOf } from '@storybook/react';

import PC from '../../scenes/Dashboard/scenes/components/PieChart/PieChart';

storiesOf('Charts', module)
    .add('Pie', () => <PC />);