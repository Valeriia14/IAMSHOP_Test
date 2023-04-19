import React from "react";
import Pagination from '../components/pagination';
import GridView from "./grid-view";
import CardView from "./card-view";
const items = [
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "21/11/2021,02:22:34 am",
  },
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "21/11/2021,02:22:34 am",
  },
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "21/11/2021,02:22:34 am",
  },
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "21/11/2021,02:22:34 am",
  },
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "21/11/2021,02:22:34 am",
  },
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "21/11/2021,02:22:34 am",
  },
];
export default function ListView({viewMethod}) {
  return (
    <div className="list-view">
      <form className="search-form nosubmit">
        <input className="nosubmit" type="search" placeholder="Search & Filter" />
      </form>
      {viewMethod==='card'? (
        <CardView items={items}/>
      ):(
        <GridView items={items}/>
      )}
      <Pagination/>
    </div>
  );
}
