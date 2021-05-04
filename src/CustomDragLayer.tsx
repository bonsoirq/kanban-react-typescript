import React from 'react';
import { useDragLayer } from 'react-dnd';
import { CustomDragLayerContainer, DragPreviewWrapper } from './styles';
import { Column } from './Column';
import { useAppState } from './AppStateContext';

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer(monitor => ({
    currentOffset: monitor.getSourceClientOffset() ?? { x: 0, y: 0 },
  }));

  if (!draggedItem) {
    return null;
  }

  return (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        <Column
          id={draggedItem.id}
          text={draggedItem.text}
          isPreview
        />
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  )
}
