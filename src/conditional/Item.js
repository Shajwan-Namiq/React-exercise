import React from 'react'

function Item({ name, isPacked }) {
  return (
    <div>
      <li className="item">
       {isPacked ? <del>{name + " ✔"}</del> : name}
       {/* {name} {isPacked && "✔"}   */ }
      </li>
    </div>
  );
}

export default Item