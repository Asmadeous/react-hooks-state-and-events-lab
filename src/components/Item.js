import React, {useState} from "react";

function Item({ name, category }) {
  const [select, setSelect] = useState(false)
  const selection = select ? "Remove From Cart" : "Add To Cart"
  const classLi = select ? "in-cart" : ""

  function clickHandler() {
    setSelect(!select)

  }

  return (
    <li className={classLi}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style={{ background: select ? "pink" : "yellow" }} onClick={clickHandler} className="add">{selection}</button>
    </li>
  );
}

export default Item;

