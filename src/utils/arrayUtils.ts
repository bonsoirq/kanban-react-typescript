type Item = {
  id: string;
}

export const findItemIndexById = (items: Item[], id: string) => (
  items.findIndex(item => item.id === id)
);

export const moveItem = <T>(array: T[], from: number, to: number) => {
  const item = array[from];
  return insertAt(removeAt(array, from), item, to);
}

export const removeAt = <T>(array: T[], index: number) => {
  return [...array.slice(0,index), ...array.slice(index + 1)];
}

export const insertAt = <T>(array: T[], item: T, index: number) => {
  return [...array.slice(0,index), item, ...array.slice(index)];
}
