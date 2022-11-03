import React from "react";
import { useState } from "react";
import "./HomePage.css";
import { List } from "./contex";
// import DeleteItem from "./contex";
console.log("**************");
console.log(List);
console.log("**************");

// import "HomePage.css";
function HomePage() {
  const { list, setList, deleteItem, Selected, rightHandler, leftHandler } =
    List();
  // setList("hello");
  // console.log(list);
  const [input, setInput] = useState("");

  const addItem = () => {
    const obj = {
      todo: input,
      isSelected: false,
      coll: Math.round(Math.random()),
    };
    const clone = [...list];
    clone.push(obj);
    setList(clone);
    setInput("");
  };

  return (
    <div>
      <div className="container">
        <input
          placeholder="write your work"
          className="input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={addItem} className="btn">
          Add
        </button>
      </div>
      <div>
        <ul className="list">
          {list.map((item, i) => {
            return (
              <div
                className={item.isSelected ? "done" : ""}
                onClick={() => Selected(i)}
                key={i}
              >
                {item.coll === 0 ? <div>{item.todo}</div> : ""}
              </div>
            );
          })}
        </ul>
        <div className="btnn">
          <button onClick={() => deleteItem()}>delete</button>
          <button onClick={leftHandler}>left</button>
          <button on onClick={rightHandler}>
            right
          </button>
        </div>
        <ul className="list2">
          {list.map((item, i) => {
            return (
              <div
                className={item.isSelected ? "done" : ""}
                onClick={() => Selected(i)}
                key={i}
              >
                {item.coll === 1 ? <div>{item.todo}</div> : ""}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
  //   {item.coll === 1 ? <div>{item.todo}</div> : "item.coll === 0"}
}

export default HomePage;
