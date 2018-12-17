import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Items from './Items';

const data = {
    id: '1',
    infoItem: ['XXX1', 'Corporate Income Tax', '10']
}

const actions = {
    onItemSelect: action('onItemSelect'),
}

storiesOf('Box', module)
    .add('Item', () => <Items data={data} {...actions} />);