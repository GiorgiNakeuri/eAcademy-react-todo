export function Reorder({ list, setList, id }) {
  const itemIndex = list.findIndex((entry) => entry.id === id);
  const listCopy = [...list];

  const handleUpvote = () => {
    if (itemIndex === 0) return;

    const itemAbove = listCopy[itemIndex - 1];
    listCopy[itemIndex - 1] = listCopy[itemIndex];
    listCopy[itemIndex] = itemAbove;

    setList(listCopy);
  };
  const handleDownvote = () => {
    if (itemIndex === list.lenght - 1) return;

    const itemBelow = listCopy[itemIndex + 1];
    listCopy[itemIndex + 1] = listCopy[itemIndex];
    listCopy[itemIndex] = itemBelow;

    setList(listCopy);
  };

  return (
    <div>
      <button onClick={handleUpvote}>⇧</button>
      <button onClick={handleDownvote}>⇩</button>
    </div>
  );
}
