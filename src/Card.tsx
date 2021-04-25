import React from 'react';
import { CardContainer } from './styles';

type Props = {
  id: string;
  columnId: string;
  text: string;
}

export const Card = ({ id, text, columnId }: Props) => {
  return (
    <CardContainer>{text}</CardContainer>
  );
}
