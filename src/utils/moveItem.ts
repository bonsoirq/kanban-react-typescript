export const moveItem = <T>(array: T[], from: number, to: number) => {
  const copy = [...array]
  const startIndex = to < 0 ? copy.length + to : to;
  const item = copy.splice(from, 1)[0];
  copy.splice(startIndex, 0, item);
  return copy;
}
