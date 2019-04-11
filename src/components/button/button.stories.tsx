import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './index';
import { ThemeProvider } from 'styled-components';
import { Default } from '../../themes';

storiesOf('Button', module)
  .add('Primary', () => (
    <ThemeProvider theme={Default}>
      <Button primary>Primary</Button>
    </ThemeProvider>
  ))
  .add('Secondary', () => (
    <ThemeProvider theme={Default}>
      <Button>Secondary</Button>
    </ThemeProvider>
  ));