import React, { createContext, useContext } from 'react';
import { appStateReducer, Task, AppState, List } from './state/appStateReducer';
import { Action } from './state/actions';
import { nanoid } from 'nanoid';
import { useImmerReducer } from 'use-immer';
import { DragItem } from './DragItem';

const appData: AppState = {
  lists: [
    {
      id: nanoid(),
      text: 'To Do',
      tasks: [{ id: nanoid(), text: 'Generate app scaffold' }],
    },
    {
      id: nanoid(),
      text: 'In Progress',
      tasks: [{ id: nanoid(), text: 'Learn Typescript' }],
    },
    {
      id: nanoid(),
      text: 'Done',
      tasks: [{ id: nanoid(), text: 'Begin to use static typing' }],
    }
  ],
  draggedItem: null,
}

type Props = {
  lists: List[];
  draggedItem: DragItem | null;
  getTasksByListId(id: string): Task[];
  dispatch: React.Dispatch<Action>;
}
const AppStateContext = createContext<Props>({} as Props);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);

  const { lists } = state;
  const draggedItem = null;
  const getTasksByListId = (id: string): Task[] => {
    return lists.find(list => list.id === id)?.tasks ?? [];
  }

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch, draggedItem }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext);
}
