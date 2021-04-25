import { findItemIndexById, moveItem } from './../utils/arrayUtils';
import { DragItem } from '../DragItem';
import { Action } from './actions';
import { nanoid } from 'nanoid';

export type Task = {
  id: string;
  text: string;
}

export type List = {
  id: string;
  text: string;
  tasks: Task[];
}

export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
}

export const appStateReducer = (draft: AppState, action: Action): AppState | void => {
  switch (action.type) {
    case 'ADD_LIST': {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;
    }
    case 'ADD_TASK': {
      const { text, listId } = action.payload;
      const targetLaneIndex = findItemIndexById(
        draft.lists,
        listId,
      );

      draft.lists[targetLaneIndex].tasks.push({
        id: nanoid(),
        text,
      });
      break;
    }
    case 'SET_DRAGGED_ITEM': {
      draft.draggedItem = action.payload;
      break;
    }
    case 'MOVE_LIST': {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(draft.lists, draggedId);
      const hoverIndex = findItemIndexById(draft.lists, hoverId);
      draft.lists = moveItem(draft.lists, dragIndex, hoverIndex);
      break;
    }
    case 'MOVE_TASK': {
      const {
        dragIndex,
        hoverIndex,
        sourceColumn,
        targetColumn,
      } = action.payload;

      const sourceLaneIndex = findItemIndexById(draft.lists, sourceColumn);
      const targetLaneIndex = findItemIndexById(draft.lists, targetColumn);

      const item = draft.lists[sourceLaneIndex].tasks.splice(dragIndex, 1)[0]
      draft.lists[targetLaneIndex].tasks.splice(hoverIndex, 0, item);
      break;
    }
    default: break;
  }
}
