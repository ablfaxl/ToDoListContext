// import { react, React } from "react";
// import React, { Children } from "react";
import { useState } from "react";
import React from "react";
import { useContext, createContext } from "react";
//----

const DbContex = createContext();

function DbProvider({ children }) {
  const [list, setList] = useState([
    { todo: "shopping", id: 1, isSelected: false, coll: 0 },
    { todo: "gym", id: 2, isSelected: false, coll: 0 },
    { todo: "walking dog", id: 3, isSelected: false, coll: 1 },
    { todo: "working on project", id: 4, isSelected: false, coll: 1 },
  ]);
  const leftHandler = () => {
    const clone = [...list];
    clone.forEach((item) => {
      if (item.coll === 1 && item.isSelected === true) {
        item.coll = 0;
        item.isSelected = false;
      }
    });
    setList(clone);
  };
  const rightHandler = () => {
    const clone = [...list];
    clone.forEach((item) => {
      if (item.coll === 0 && item.isSelected === true) {
        item.coll = 1;
        item.isSelected = false;
      }
      setList(clone);
    });
  };
  const Selected = (index) => {
    const clone = [...list];
    clone[index].isSelected = !clone[index].isSelected;
    setList(clone);
  };
  const deleteItem = () => {
    const clone = [...list];
    const deleted = clone.filter((item) => item.isSelected === false);
    setList(deleted);
  };
  return (
    <DbContex.Provider
      value={{ list, setList, deleteItem, Selected, rightHandler, leftHandler }}
    >
      {children}
    </DbContex.Provider>
  );
}

export function List() {
  return useContext(DbContex);
}

// export function DeleteItem() {
//   const clone = [...List];
//   const deleted = clone.filter((item) => item.isSelected === false);
//   setList(deleted);
//   return useContext(DbContex);
// }

export default DbProvider;
