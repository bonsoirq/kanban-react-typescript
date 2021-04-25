import React from 'react';
import { AddNewItem } from './AddNewItem';
import { AppContainer } from './styles';
import { Column } from './Column';
import { useAppState } from './AppStateContext';
import { addList } from './state/actions';
import { Debug } from './utils/Debug';

const App = () => {
  const { lists, draggedItem, dispatch } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column id={list.id} text={list.text} key={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch(addList(text))}
      />
      <Debug object={draggedItem}/>
    </AppContainer>
  );
}

export default App;
