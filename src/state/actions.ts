import { DragItem } from './../DragItem';

export type Action =
  | AddListAction
  | AddTaskAction
  | MoveListAction
  | SetDraggedItemAction
  | MoveTaskAction

type AddListAction = {
  type: "ADD_LIST";
  payload: string;
};

type AddTaskAction = {
  type: 'ADD_TASK';
  payload: { 
    text: string;
    listId: string;
  };
};

type MoveListAction = {
  type: 'MOVE_LIST';
  payload: {
    draggedId: string;
    hoverId: string;
  }
};

type SetDraggedItemAction = {
  type: 'SET_DRAGGED_ITEM';
  payload: DragItem | null;
};

type MoveTaskAction = {
  type: 'MOVE_TASK';
  payload: {
    dragIndex: number;
    hoverIndex: number;
    sourceColumn: string;
    targetColumn: string;
  }
}

export const addTask = (
  text: string,
  listId: string,
): AddTaskAction => ({
  type: 'ADD_TASK',
  payload: {
    text,
    listId,
  }
});

export const addList = (
  text: string,
): AddListAction => ({
  type: 'ADD_LIST',
  payload: text,
});

export const moveList = (
  draggedId: string,
  hoverId: string,
): MoveListAction => ({
  type: 'MOVE_LIST',
  payload: {
    draggedId,
    hoverId,
  }
});

export const setDraggedItem = (
  draggedItem: DragItem | null,
): SetDraggedItemAction => ({
  type: 'SET_DRAGGED_ITEM',
  payload: draggedItem,
});
