import "../styles/AddTodo.css";

export default function AddTodo({ input, handleInputChange, handleSave }) {
  return (
    <div className="addTodoContainer">
      <input
        type="text"
        onChange={handleInputChange} //onChange-ზე setInput ფუნქციით ვანახლებ input სტეიტს სადაც ვინახავ ივენთდან ამოკითხულ იუზერის მიერ აკრეფილ ტეაქს
        value={input} // აქ ინპუტს ვეუბნები რომ გამოიყენოს ცვლადი input როგორც ვალიუ
      />
      <button onClick={handleSave}>შენახვა</button>
    </div>
  );
}
