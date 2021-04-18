import React from 'react';
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
    </ColumnContainer>
  );
}