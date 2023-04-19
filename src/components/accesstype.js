import React, { useState } from "react";
import GeneralSelect from "./utils/GeneralSelect";

const items = ["All", "One-Time Access", "Pre-Approved"];
export default function AccessType() {
  const [selectedItem, setSelectedItem] = useState("All");
  const [toggle, setToggle] = useState(false);
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
          toggle={toggle}
          setToggle={(v) => setToggle(v)}
        />
      </div>
    </div>
  );
}
