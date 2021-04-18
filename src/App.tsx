import React from 'react';
import { AppContainer } from './styles';
import { Card } from './Card';
import { Column } from './Column';

function App() {
  return (
    <AppContainer>
      <Column text="To do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
    </AppContainer>
  );
}

export default App;
