import React from "react";
import Pagination from '../utils/Pagination';
import GridView from "./grid-view";
import CardView from "./card-view";
import QuickSearch from "../utils/QuickSearch";
const items = [
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "19/08/2020,06:29 pm",
  },
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "19/08/2020,06:29 pm",
  },
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "19/08/2020,06:29 pm",
  },
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "19/08/2020,06:29 pm",
  },
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "19/08/2020,06:29 pm",
  },
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "19/08/2020,06:29 pm",
  },
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "19/08/2020,06:29 pm",
  },
  {
    friendly_name: "Friendly Name",
    dns_name: "DNS Name",
    environment: "Environment",
    end_date: "19/08/2020,06:29 pm",
  },
];
export default function ListView({viewMethod}) {
  return (
    <div className="list-view">
      <QuickSearch/>
      {viewMethod==='card'? (
        <CardView items={items}/>
      ):(
        <GridView items={items}/>
      )}
      <Pagination/>
    </div>
  );
}
