import React from 'react';
import { CardContainer } from './styles';

type Props = {
  text: string;
}

export const Card = ({ text }: Props) => {
  return (
    <CardContainer>{text}</CardContainer>
  );
}