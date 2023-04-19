import React from 'react'

export default function Pagination() {
  return (
    <ul className="pagination pagination-conf">
        <li className="page-item ">
          <a className="page-link" href="/">
            {"<"}
          </a>
        </li>
        <li className="page-item">
          <a className="page-link active-link" href="/">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            ...
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            185
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            186
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            {">"}
          </a>
        </li>
      </ul>
  )
}
