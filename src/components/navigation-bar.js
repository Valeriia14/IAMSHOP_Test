import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import CustomSelect from "./utils/CustomSelect";

const items = [
  { value: "Computers", img_url: "a-icons-micro-16-business-roles.svg" },
  { value: "Computers", img_url: "a-icons-micro-16-business-roles.svg" },
  { value: "Computers", img_url: "a-icons-micro-16-business-roles.svg" },
  { value: "Computers", img_url: "a-icons-micro-16-business-roles.svg" },
  { value: "Computers", img_url: "a-icons-micro-16-business-roles.svg" },
  { value: "Computers", img_url: "a-icons-micro-16-business-roles.svg" },
  { value: "Computers", img_url: "a-icons-micro-16-business-roles.svg" },
  { value: "Computers", img_url: "a-icons-micro-16-business-roles.svg" },
  { value: "Computers", img_url: "a-icons-micro-16-business-roles.svg" },
  { value: "Computers", img_url: "a-icons-micro-16-business-roles.svg" },
];

const NavigationBar = ({ setViewMethod, viewMethod }) => {
  const [selectedItem, setSelectedItem] = useState({ value: "Computers", img_url: "a-icons-micro-16-business-roles.svg" });
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navigation-bar">
      <div className="d-flex flex-row justify-content-between align-items-center w-100">
        <div>
          <CustomSelect options={items} value={selectedItem} onChangeValue={(item) => setSelectedItem(item)} toggle={toggle} setToggle={(v)=>setToggle(v)}/>
          {/* <FormControl variant="standard">
            <Select
              className="select"
              value={selectedItem}
              renderValue={(value) => (
                <div className="value-rel">
                  <span className="value">{value}</span>
                  <span className="badge-conf"><span>3</span></span>
                </div>
              )}
              onChange={(e) => setSelectedItem(e.target.value)}
            >
              {items.map((item, index) => (
                <MenuItem value={item.value} key={index} className="pl-2">
                  <div>
                  <img src={"/assets/images/" + item.img_url} alt=""className="mr-2" />
                  <span style={{marginLeft:10}}>{item.value}</span>
                  </div>
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
        </div>
        <div className="d-flex flex-row justify-content-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setViewMethod('list');
            }}
            data-title="lists"
          >
            <img
              src={viewMethod==='list'?"/assets/images/a-icons-24-color-grid-active.svg":"/assets/images/a-icons-24-color-grid-inactive.svg"}
              alt="list"
              className="list-active"
            />
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setViewMethod('card');
            }}
            data-title="cards"
          >
            <img
              src={viewMethod==='card'?"/assets/images/a-icons-24-color-cards-active.svg":"/assets/images/a-icons-24-color-cards-inactive.svg"}
              alt="card"
              className="card-active"
            />
          </a>
        </div>
      </div>
      <hr className="m-0" />
    </div>
  );
};

export default NavigationBar;
