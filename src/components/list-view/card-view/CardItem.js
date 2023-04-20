import React , {useState} from "react";
import Modal from '../../utils/Modal';

export default function CardItem({item}) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <div className="card-title d-flex flex-row align-items-center">
            <h4>{item.friendly_name}</h4>
          </div>
          <div className="d-flex flex-column justify-content-between p-2">
            <div className="card-text">
              <p className="card-text-muted">{item.friendly_name}</p>
              <p className="card-text-no-muted">{item.friendly_name}</p>
            </div>
            <div className="card-text">
              <p className="card-text-muted">{item.dns_name}</p>
              <p className="card-text-no-muted">{item.dns_name}</p>
            </div>
            <div className="card-text">
              <p className="card-text-muted">{item.environment}</p>
              <p className="card-text-no-muted">{item.environment}</p>
            </div>
            <div className="card-text">
              <p className="card-text-muted">End Date</p>
              <p className="card-text-no-muted">{item.end_date}</p>
            </div>
            <a href="/" className="btn btn-success card-btn" onClick={(e) => {
              e.preventDefault();
              setOpenModal(true);

            }}>
              Details
            </a>
            
          </div>
        </div>
      </div>
      <Modal openModal={openModal} handleOpen={() => setOpenModal(true)} handleClose={() => setOpenModal(false)} data={item}/>
    </div>
  );
}
