type Item = {
  id: string;
}

export const findItemIndexById = (items: Item[], id: string) => (
  items.findIndex(item => item.id === id)
);
