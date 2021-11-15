import React, {useState} from "react";

function PlantCard(props) {
  const [inStock, setInStock] = useState(true)
  
  function handleClick() {
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={props.image} alt={props.name} />
      <h4>{props.name}</h4>
      <p>Price: {props.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
