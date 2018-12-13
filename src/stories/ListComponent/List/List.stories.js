import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './List';
import { actions } from '../ListElement/ListElement.stories';

export const data = {
    items: [
        ['Direction', 'Adm. dir', ' - ', 'Jakob Riis'],
        ['Direction', 'Direktør', ' - ', 'Tor Mage Lønnum'],
        ['Bestyrelse', 'Formand', ' Generalforsamling ', 'Per Schütze'],
    ],
    headers: ['PERSONKREDS', 'TITLE', 'VALGFORM', 'NAVN'],
}

storiesOf('List', module)
    .add('List', () => <List data={data} {...actions} />);