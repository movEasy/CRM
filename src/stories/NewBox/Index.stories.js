import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Box from './Index';

storiesOf('Box', module)
    .add('Index', () => <Main data={data} actions={actions} />);