import React from "react";

const ListHeader = () => {
  return (
    <thead>
      <tr>
        <th className="align-middle">Friendly Name<img src="/assets/images/sort-ascending.svg" alt="sort"/></th>
        <th className="align-middle">DNS Name<img src="/assets/images/sort-ascending.svg" alt="sort"/></th>
        <th className="align-middle">Environment<img src="/assets/images/sort-ascending.svg" alt="sort"/></th>
        <th className="align-middle">End Date<img src="/assets/images/sort-ascending.svg" alt="sort"/></th>
      </tr>
    </thead>
  );
};
export default ListHeader;
