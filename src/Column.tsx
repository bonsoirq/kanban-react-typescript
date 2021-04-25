import React, { useRef } from 'react';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { ColumnContainer, ColumnTitle } from './styles';
import { isHidden } from './utils/isHidden';
import { useAppState } from './AppStateContext';
import { useDrop } from 'react-dnd';
import { useItemDrag } from './utils/useItemDrag';
import { addTask, moveList } from './state/actions';

type Props = {
  text: string;
  id: string;
  isPreview?: boolean;
}

export const Column = ({
  text,
  id,
  isPreview,
}: Props) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({ type: 'COLUMN', id, text });
  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover() {
      if (!draggedItem) {
        return;
      }

      if (draggedItem.type === 'COLUMN') {
        if (draggedItem.id === id) {
          return;
        }

        dispatch(moveList(draggedItem.id, id));
      }
    }
  })

  drag(drop(ref))

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(
        isPreview,
        draggedItem,
        'COLUMN',
        id,
      )}
      isPreview={isPreview}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card 
          columnId={id}
          id={task.id}
          key={task.id}
          text={task.text}
        />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={text => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
}
