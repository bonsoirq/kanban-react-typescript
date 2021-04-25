import { setDraggedItem } from './../state/actions';
import { useAppState } from './../AppStateContext';
import { DragItem } from './../DragItem';
import { useDrag } from 'react-dnd';

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    item() {
      dispatch(setDraggedItem(item));
      return item;
    },
    type: item.type,
    end() {
      dispatch(setDraggedItem(null));
    }
  });

  return { drag }
}
