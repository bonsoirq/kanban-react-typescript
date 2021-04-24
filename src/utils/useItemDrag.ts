import { useAppState } from './../AppStateContext';
import { DragItem } from './../DragItem';
import { useDrag } from 'react-dnd';

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    item: () => {
      dispatch({ type: 'SET_DRAGGED_ITEM', payload: item });
      return item;
    },
    type: item.type,
    end: () => {
      dispatch({ type: 'SET_DRAGGED_ITEM', payload: undefined });
    }
  });

  return { drag }
}
