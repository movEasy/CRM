import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListElement from './ListElement';

export const data = {
    itemsArray: ['Direction', 'Adm. dir', ' - ', 'Jakob Riis'],
}

storiesOf('List', module)
    .add('ListElement', () => <ListElement data={data} />);