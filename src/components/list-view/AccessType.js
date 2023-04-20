import React, { useState } from "react";
import GeneralSelect from "../utils/AccessTypeSelect";

const items = ["All", "One-Time Access", "Pre-Approved"];
export default function AccessType({accessTypeToggle, setAccessTypeToggle}) {
  const [selectedItem, setSelectedItem] = useState("All");
  return (
    <div className="access-type">
      <div className="access-type-title">
        <span>Access Type</span>
      </div>
      <div className="access-type-body">
        <span className="">SELECT ACCESS TYPE</span>
        <br />

        <GeneralSelect
          options={items}
          value={selectedItem}
          onChangeValue={(item) => setSelectedItem(item)}
          toggle={accessTypeToggle}
          setToggle={(v) => setAccessTypeToggle(v)}
        />
      </div>
    </div>
  );
}
