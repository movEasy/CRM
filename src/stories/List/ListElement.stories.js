import React from 'react';
import { storiesOf } from '@storybook/react';

import ListElement from './ListElement';

export const data = {
    titles: ['Direction', 'Adm. dir', ' - ', 'Jakob Riis'],
    details: {
        adresse: 'Skovparken 106',
        postNrBy: '7190 Billund',
        indirekteBesiddelse: 'Har indirekte besiddelser ',
        andreRettigheder: 'Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed'
    },
}

storiesOf('List', module)
    .add('ListElement', () => <ListElement data={data} />);