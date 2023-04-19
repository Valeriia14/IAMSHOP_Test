import React from "react";
import CardItem from "./card-item";
export default function CardView({items}) {
  return (
    <div>
      <div className="row p-0">
      {items.map((item, index) => (
        <CardItem key={index} item={item}/>
      ))}
    </div>
    </div>
  );
}