import React from "react";

const ListHeader = () => {
  return (
    <thead>
      <tr>
        <th className="align-middle first-th">
          <span className="th-title">Friendly Name</span>
          <svg
            className="ml-2"
            width="10"
            height="13"
            viewBox="0 0 10 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-drop-arrow"
              d="M5 .031a.5.5 0 0 0-.5.5v9.275L1.354 6.66a.502.502 0 0 0-.708.708l4 4 .015.013a.503.503 0 0 0 .044.037l-.059-.05a.507.507 0 0 0 .446.138L5 11.514a.502.502 0 0 0 .354-.146l4-4a.502.502 0 0 0-.708-.708L5.5 9.806V.531a.5.5 0 0 0-.5-.5z"
              fill="#D2D2D9"
            />
          </svg>
        </th>
        <th className="align-middle second-th">
          <span className="th-title">DNS Name</span>
          <svg
            className="ml-2"
            width="10"
            height="13"
            viewBox="0 0 10 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-drop-arrow"
              d="M5 .031a.5.5 0 0 0-.5.5v9.275L1.354 6.66a.502.502 0 0 0-.708.708l4 4 .015.013a.503.503 0 0 0 .044.037l-.059-.05a.507.507 0 0 0 .446.138L5 11.514a.502.502 0 0 0 .354-.146l4-4a.502.502 0 0 0-.708-.708L5.5 9.806V.531a.5.5 0 0 0-.5-.5z"
              fill="#D2D2D9"
            />
          </svg>
        </th>
        <th className="align-middle third-th">
          <span className="th-title">Environment</span>
          <svg
            className="ml-2"
            width="10"
            height="13"
            viewBox="0 0 10 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-drop-arrow"
              d="M5 .031a.5.5 0 0 0-.5.5v9.275L1.354 6.66a.502.502 0 0 0-.708.708l4 4 .015.013a.503.503 0 0 0 .044.037l-.059-.05a.507.507 0 0 0 .446.138L5 11.514a.502.502 0 0 0 .354-.146l4-4a.502.502 0 0 0-.708-.708L5.5 9.806V.531a.5.5 0 0 0-.5-.5z"
              fill="#D2D2D9"
            />
          </svg>
        </th>
        <th className="align-middle fourth-th">
          <span className="th-title">End Date</span>
          <svg
            className="ml-2"
            width="10"
            height="13"
            viewBox="0 0 10 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg-drop-arrow"
              d="M5 .031a.5.5 0 0 0-.5.5v9.275L1.354 6.66a.502.502 0 0 0-.708.708l4 4 .015.013a.503.503 0 0 0 .044.037l-.059-.05a.507.507 0 0 0 .446.138L5 11.514a.502.502 0 0 0 .354-.146l4-4a.502.502 0 0 0-.708-.708L5.5 9.806V.531a.5.5 0 0 0-.5-.5z"
              fill="#D2D2D9"
            />
          </svg>
        </th>
      </tr>
    </thead>
  );
};
export default ListHeader;
