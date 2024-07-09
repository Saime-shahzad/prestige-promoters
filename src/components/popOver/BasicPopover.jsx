import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const BasicPopover = ({onClose, isPopoverVisible}) =>{
console.log("isPopoverVisible", isPopoverVisible);
React.useEffect(() => {
  if (isPopoverVisible) {
    console.log('Popover is now visible');
  } else {
    console.log('Popover is now hidden');
  }
}, [isPopoverVisible]);
  return (
    <div>
     
       {isPopoverVisible  && (
        <Popover
          open
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          onClose={onClose}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      )}
    </div>
  );
}
export default BasicPopover;
