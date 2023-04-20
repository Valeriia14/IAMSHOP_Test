import React from "react";
import CardItem from "./CardItem";
export default function CardView({ items }) {
  return (
    <div>
      <div className="row p-0">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index < 6 ? <CardItem key={index} item={item} /> : <></>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
