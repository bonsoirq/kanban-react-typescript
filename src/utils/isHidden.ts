import { DragItem } from './../DragItem';

export const isHidden = (
  draggedItem: DragItem | undefined,
  itemType: string,
  id: string,
) => {
  return !!(
    draggedItem && draggedItem.type === itemType && draggedItem.id === id
  )
}
