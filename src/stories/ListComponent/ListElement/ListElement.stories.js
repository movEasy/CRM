import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListElement from './ListElement';

export const data = {
    itemsArray: ['Direction', 'Adm. dir', ' - ', 'Jakob Riis'],
    state: 'ItemElementState',
    dataOpen: {
        adresse: 'Skovparken 106',
        postNrBy: '7190 Billund',
        indirekteBesiddelse: 'Har indirekte besiddelser ',
        andreRettigheder: 'Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed'
    }
}

export const actions = {
    onItemState: action('onItemState'),
    onCloseItem: action('onCloseItem')
}

storiesOf('List', module)
    .add('ListElement - default', () => <ListElement data={{...data, state: 'CLOSED'}} {...actions} />)
    .add('ListElement - open', () => <ListElement data={{...data, state: 'OPEN'}} {...actions} />)
    .add('ListElement - close', () => <ListElement data={{...data, state: 'CLOSING'}} {...actions} />)
;