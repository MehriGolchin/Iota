import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from './index';

storiesOf('Icon', module)
    .add('default', () => (
        <div>
            <Icon name="github" />
            <br />
            <Icon name="twitter" width="24" height="24" fill="red" />
        </div>
    ));
