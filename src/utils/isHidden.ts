import { DragItem } from './../DragItem';

export const isHidden = (
  isPreview: boolean | undefined,
  draggedItem: DragItem | undefined,
  itemType: string,
  id: string,
) => {
  return !!(
    !isPreview &&
    draggedItem &&
    draggedItem.type === itemType &&
    draggedItem.id === id
  )
}
