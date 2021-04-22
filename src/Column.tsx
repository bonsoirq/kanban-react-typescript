import React from 'react';
import { AddNewItem } from './AddNewItem';
import { ColumnContainer, ColumnTitle } from './styles';

type Props = {
  text: string;
}

export const Column = ({ 
  text,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem 
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
}