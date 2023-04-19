import React from "react";

export default function ListItem({ item, setCurrentItem, setOpenModal }) {
  return (
    <tr>
      <td className="align-middle">{item.friendly_name}</td>
      <td className="align-middle">{item.dns_name}</td>
      <td className="align-middle">{item.environment}</td>

      <td className="align-middle">
        <div className="d-flex flex-row justify-content-between w-100">
        <div>
        {item.end_date.split(',')[0]}<br/>{item.end_date.split(',')[1]}
        </div>
        <button
          className="grid-btn mr-0"
          type="button"
          onClick={() => {
            setOpenModal(true);
            setCurrentItem(item);
          }}
        >
          Detail
        </button>
        </div>
      </td>
    </tr>
  );
}
