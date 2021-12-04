import { useState } from "react";
import AddTodo from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { QuickActions } from "./components/QuickActions";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const handleInputChange = (e) => setInput(e.target.value);
  const handleSave = () => {
    // აიდის მნიშვნელობად ვიყენებ ღილაკზე დაჭერის დროს, isDone არს დეფოლტად ფოლსი და ინპუტი არის იმდორისათვის არსებული ინპუტის მნიშვნელობა. ...list ახალ მასივში აკოპირებს უკვე არსებულ მნიშვნელობებს
    if (list.find((entry) => entry.input === input)) {
      alert("შეყვანილი მნიშვნელბობა უკვე არსებობს!"); //ჩემი სასურველი ფორმა რითაც მომხარებელს ვატობინებ რომ მის მიერ შეყვაილი მნიშვნელობა უკვე არსებობს!. თუ დავაწვებით შემდგომ ok-ის გაქრება ერორის შეტყობინება.
    } else {
      setList([
        ...list,
        { input, id: new Date(), isDone: false, isChecked: false },
      ]);
      setInput(""); // ვანულებ ინპუტს
    }
  };

  return (
    <div className="wrapper">
      <AddTodo
        handleSave={handleSave}
        handleInputChange={handleInputChange}
        input={input}
      />
      <QuickActions list={list} setList={setList} />
      <TodoList list={list} setList={setList} />
    </div>
  );
}

export default App;
