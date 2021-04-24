import React from 'react';
import { XYCoord, useDragLayer } from 'react-dnd';
import { CustomDragLayerContainer } from './styles';
import { Column } from './Column';

const getItemStyles = (
  currentOffset: XYCoord | null
): React.CSSProperties => {
  if (!currentOffset) {
    return {
      display: 'none',
    }
  }

  const {x, y} = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
  }
};

export const CustomDragLayer = () => {
  const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
    currentOffset: monitor.getSourceClientOffset(),
    item: monitor.getItem(),
    isDragging: monitor.isDragging()
  }));

  if (!isDragging) {
    return null;
  }

  return (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        <Column
          id={item.id}
          text={item.text}
          index={item.index}
          isPreview
        />
      </div>
    </CustomDragLayerContainer>
  )
}
