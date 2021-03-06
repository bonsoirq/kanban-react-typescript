import React from 'react';
import { AddNewItem } from './AddNewItem';
import { AppContainer } from './styles';
import { Column } from './Column';
import { useAppState } from './AppStateContext';
import { addList } from './state/actions';
import { CustomDragLayer } from './CustomDragLayer';

const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list) => (
        <Column id={list.id} text={list.text} key={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch(addList(text))}
      />
    </AppContainer>
  );
}

export default App;
