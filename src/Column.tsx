import React, { useRef } from 'react';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { ColumnContainer, ColumnTitle } from './styles';
import { DragItem } from './DragItem';
import { isHidden } from './utils/isHidden';
import { useAppState } from './AppStateContext';
import { useDrop } from 'react-dnd';
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

  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      dispatch({ type: 'MOVE_LIST', payload: { dragIndex, hoverIndex } })
      item.index = hoverIndex;
    }
  })

  const { drag } = useItemDrag({ type: 'COLUMN', id, text, index });
  drag(drop(ref))

  return (
    <ColumnContainer ref={ref} isHidden={isHidden(state.draggedItem, 'COLUMN', id)}>
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
