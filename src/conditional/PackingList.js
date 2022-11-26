import React from 'react'
import Item from './Item';


function PackingList() {
  return (
    <div>
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ol>
          <Item isPacked={true} name="Space suit" />
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Tam" />
          <Item isPacked={false} name="Photo of San" />
        </ol>
      </section>
    </div>
  );
}

export default PackingList