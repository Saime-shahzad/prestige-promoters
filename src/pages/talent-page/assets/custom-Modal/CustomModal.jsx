import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RadioButton from '../../../../components/Availaibility-radio-Button';

const style = {
  position: 'absolute',
  border:"none",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#1D1C1C',
  boxShadow: 24,
  borderRadius:5,
};

const CustomModal=({setOpen , open , data}) => {
  const handleClose = () => setOpen(false);

  return (
    <div className='modalParrent '>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='p-0 border  '
      >
        <Box sx={style}>
         <RadioButton data={data} handleClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}
export default  CustomModal