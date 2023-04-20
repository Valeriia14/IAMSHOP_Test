import React from "react";

export default function QuickSearch() {
  return (
    <div className="quick-search d-flex flex-row">
      <img src="/assets/images/quick-search.svg" className="add-on-icon" alt="add-on-icon" />
      <input type="text"  className="search-input" placeholder="Search & Filter" />
    </div>
  );
}
