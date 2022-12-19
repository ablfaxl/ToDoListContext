import { useState } from "react";
import "./HomePage.css";

const UID = () => `${new Date().getTime()}${String(Math.random()).slice(3, 8)}`;

const Firsttodolist = () => {
  const [inputValue, setInputvalue] = useState("");
  const [todolist, settodolist] = useState([
    {
      text: "walk the dog",
      isDone: false,
      id: UID(),
    },
    {
      text: "feed the cat",
      isDone: false,
      id: UID(),
    },
  ]);

  //check Item
  const checked = (id) => {
    const arr = [...todolist];
    const index = arr.findIndex((item) => item.id === id);
    arr[index].isDone = !arr[index].isDone;
    settodolist(arr);
  };

  //delete Item
  const deleteItem = (index) => {
    const arr = [...todolist];
    arr.splice(index, 1);
    settodolist(arr);
  };

  //create li and add to ul
  const newLi = todolist.map((item, index) => {
    return (
      <li key={index} className={item.isDone ? "isDone" : ""}>
        <button onClick={() => checked(item.id)} className="checked">
          check
        </button>
        {item.text}
        <span onClick={() => deleteItem(index)} className="close">
          &#215;
        </span>
      </li>
    );
  });

  //create obj and add to todolist
  const addItem = () => {
    if (!inputValue) return alert("plz fill Input!");

    const obj = {
      text: inputValue,
      isDone: false,
      id: UID(),
    };

    const arr = [...todolist];
    arr.push(obj);
    settodolist(arr);
    setInputvalue("");
  };

  return (
    <>
      <div className="container">
        <div id="h"></div>
        <h1 style={{ position: "relative", bottom: "80px" }}>ToDo List</h1>

        <div  className="inputText">
          <input
            type="text"
            placeholder="Add todo..."
            value={inputValue}
            onChange={(e) => {
              setInputvalue(e.target.value);
            }}
          />

          <span id="add" className="addBtn" onClick={addItem}>
            &#43;
          </span>
        </div>
      </div>

      <div id="list">
        <ul className="ul">{newLi}</ul>
      </div>
    </>
  );
};
export default Firsttodolist;
