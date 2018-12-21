import React from 'react';
import { storiesOf } from '@storybook/react';

import BarLine from './BarLine';

const data = ['17', 'Revenue'];

const elementColor = '#473698'

storiesOf('Charts', module)
    .add('BarLine', () => <BarLine data={data} color={elementColor} />);