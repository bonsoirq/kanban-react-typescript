import React, { useRef } from 'react';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContext';
import { Card } from './Card';
import { ColumnContainer, ColumnTitle } from './styles';
import { useItemDrag } from './utils/useItemDrag';

type Props = {
  text: string;
  index: number;
  id: string;
}

export const Column = ({ 
  text,
  index,
  id,
}: React.PropsWithChildren<Props>) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  
  const { drag } = useItemDrag({ type: 'COLUMN', id, text, index });
  drag(ref)
  
  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map(task => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem 
        toggleButtonText="+ Add another task"
        onAdd={text => {
          dispatch({ type: 'ADD_TASK', payload: { text, taskId: id } })
        }}
        dark
      />
    </ColumnContainer>
  );
}
