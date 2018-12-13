import React from 'react';
import { storiesOf } from '@storybook/react';

import ListItem from './ListItem';

export const data = {
    title: 'Direction',
}

storiesOf('List', module)
    .add('ListItem', () => <ListItem data={data} />);