import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './List';

export const data = {
    headers: ['YDERLIGERE', 'PERSONKREDS', 'TITEL', 'VALGFORM', 'NAVN'],
    data1: {
        titles: ['Info', 'Direction', 'Adm. dir', ' - ', 'Jakob Riis'],
        details: {
            adresse: 'Skovparken 106',
            postNrBy: '7190 Billund',
            indirekteBesiddelse: 'Har indirekte besiddelser ',
            andreRettigheder: 'Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed'
        }
    },
    data2: {
        titles: ['Info', 'Direction', 'Adm. dir', ' - ', 'Jakob Riis'],
        details: {
            adresse: 'Skovparken 106',
            postNrBy: '7190 Billund',
            indirekteBesiddelse: 'Har indirekte besiddelser ',
            andreRettigheder: 'Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed'
        }
    },
    data3: {
        titles: ['Info', 'Direction', 'Adm. dir', ' - ', 'Jakob Riis'],
        details: {
            adresse: 'Skovparken 106',
            postNrBy: '7190 Billund',
            indirekteBesiddelse: 'Har indirekte besiddelser ',
            andreRettigheder: 'Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed'
        }
    },
    data4: {
        titles: ['Info', 'Direction', 'Adm. dir', ' - ', 'Jakob Riis'],
        details: {
            adresse: 'Skovparken 106',
            postNrBy: '7190 Billund',
            indirekteBesiddelse: 'Har indirekte besiddelser ',
            andreRettigheder: 'Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed'
        }
    },
    data5: {
        titles: ['Info', 'Direction', 'Adm. dir', ' - ', 'Jakob Riis'],
        details: {
            adresse: 'Skovparken 106',
            postNrBy: '7190 Billund',
            indirekteBesiddelse: 'Har indirekte besiddelser ',
            andreRettigheder: 'Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed'
        }
    },
    data6: {
        titles: ['Info', 'Direction', 'Adm. dir', ' - ', 'Jakob Riis'],
        details: {
            adresse: 'Skovparken 106',
            postNrBy: '7190 Billund',
            indirekteBesiddelse: 'Har indirekte besiddelser ',
            andreRettigheder: 'Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed'
        }
    },
    data7: {
        titles: ['Info', 'Direction', 'Adm. dir', ' - ', 'Jakob Riis'],
        details: {
            adresse: 'Skovparken 106',
            postNrBy: '7190 Billund',
            indirekteBesiddelse: 'Har indirekte besiddelser ',
            andreRettigheder: 'Kjeld Kirk Kristiansen har bestemmende indflydelse i bagvedliggende virksomhed'
        }
    },
}

storiesOf('List', module)
    .add('List', () => <List data={data} />);