import "../styles/QuickActions.css";

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
    <div className="QuickActionsContainer">
      <button onClick={handleRemoveAll}>წაშლა</button>
      <button onClick={handleRemoveAllComplited}>დასრულებულის წაშლა</button>
      <button onClick={handleRemoveAllChecked}>მონიშნულის წაშლა</button>
    </div>
  );
}
