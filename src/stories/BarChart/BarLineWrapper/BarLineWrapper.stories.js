import React from 'react';
import { storiesOf } from '@storybook/react';

import BarLineWrapper from './BarLineWrapper';

const data = [
    ['20', 'Gross Revenue'],
    ['45', 'Revenue'],
    ['30', 'Realized Revenue'],
    ['7', 'Misc.'],
];

const color = {
    elementColor: ['#473698', '#460A68', '#6D2077', '#00A2A1']
}

storiesOf('Charts', module)
    .add('Bar line wrapper', () => <BarLineWrapper data={data} color={color} />);