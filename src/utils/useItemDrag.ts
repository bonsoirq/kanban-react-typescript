import { setDraggedItem } from "./../state/actions";
import { useAppState } from "./../AppStateContext";
import { DragItem } from "./../DragItem";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useEffect } from "react";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    item() {
      dispatch(setDraggedItem(item));
      return item;
    },
    type: item.type,
    end() {
      dispatch(setDraggedItem(null));
    },
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag };
};
