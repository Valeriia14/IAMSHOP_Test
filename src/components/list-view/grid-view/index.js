import React, {useState} from "react";
import Modal from "../../utils/Modal";
import GridItem from "./GridItem";
import ListHeader from "./ListHeader";
export default function GridView({ items }) {
  const [openModal, setOpenModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(items[0]);
  return (
    <div className="list-items">
      <table className="table grid-table table-responsive ">
        <ListHeader />
        <tbody>
          {items.map((item, index) => (
            <GridItem item={item} key={index} setCurrentItem={(item)=> setCurrentItem(item)} setOpenModal={() => setOpenModal(true)} />
          ))}
        </tbody>
      </table>
      <Modal
        openModal={openModal}
        handleOpen={() => setOpenModal(true)}
        handleClose={() => setOpenModal(false)}
        data={currentItem}
      />
    </div>
  );
}
