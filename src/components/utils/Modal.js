import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: 10,
  left: '50%',
  width: '60%',
  bgcolor: 'background.paper',
  borderRadius:6,
  height:2000,
  boxShadow: 24,
  overflow:'hidden'
};

export default function TransitionsModal({openModal, handleClose, data}) {

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 1000,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <div className='modal-title d-flex flex-row justify-content-between align-items-center'>
              <h4>Computers Item Freiendly Name</h4>
              <a href="/" onClick={(e) => {
                handleClose();
              e.preventDefault()}} className='modal-close'>
                <img src="/assets/images/close.svg" alt="close"/>
              </a>
            </div>
            <div className='modal-body d-flex flex-column justify-content-between'>
              <div className='row'>
                <div className='col-md-3 muted'>{data.friendly_name}</div>
                <div className='col-md-4'>{data.friendly_name}</div>
              </div>
              <div className='row'>
                <div className='col-md-3 muted'>{data.dns_name}</div>
                <div className='col-md-4'>{data.dns_name}</div>
              </div>
              <div className='row'>
                <div className='col-md-3 muted'>{data.environment}</div>
                <div className='col-md-4'>{data.environment}</div>
              </div>
              <div className='row'>
                <div className='col-md-3 muted'>{data.end_date}</div>
                <div className='col-md-4 '>{data.end_date}</div>
              </div>
            </div>
            <div className='modal-bottom'>
              <button type="button" onClick={() => {handleClose()}} className='modal-btn'>Close</button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}