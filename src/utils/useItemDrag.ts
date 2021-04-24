import { useAppState } from './../AppStateContext';
import { DragItem } from './../DragItem';
import { useDrag } from 'react-dnd';
import { useEffect } from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    item: () => {
      dispatch({ type: 'SET_DRAGGED_ITEM', payload: item });
      return item;
    },
    type: item.type,
    end: () => {
      dispatch({ type: 'SET_DRAGGED_ITEM', payload: undefined });
    }
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag }
}
