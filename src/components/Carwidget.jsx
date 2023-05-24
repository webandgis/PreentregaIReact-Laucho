import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CarWidget = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "30px",
        justifyContent: "space-between",
        alignItems: "center",
        color:"purple"
      }}
    >
      <FontAwesomeIcon icon={faCartShopping} />
      <span>1</span>
    </div>
  );
};

export default CarWidget;