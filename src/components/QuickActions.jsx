export function QuickActions({ list, setList }) {
  const handleRemoveAll = () => {
    setList([]);
  };
  const handleRemoveAllComplited = () => {
    setList(list.filter((entry) => !entry.isDone));
  };
  const handleRemoveAllChecked = () => {
    setList(list.filter((entry) => !entry.isChecked));
  };

  return (
    <div>
      <button onClick={handleRemoveAll}>ყველას წაშლა</button>
      <button onClick={handleRemoveAllComplited}>
        ყველა დასრულებულის წაშლა
      </button>
      <button onClick={handleRemoveAllChecked}>ყველა მონიშნულის წაშლა</button>
    </div>
  );
}
