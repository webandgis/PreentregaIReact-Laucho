import React from 'react'

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ fontSize: "1.5rem", color: "purple", display:"flex", justifyContent: "center", fontWeight: "bold"
  }}>
      {greeting}
    </div>
  );
}

export default ItemListContainer;