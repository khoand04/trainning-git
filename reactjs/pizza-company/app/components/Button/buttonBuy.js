import * as React from 'react';
import { Button, Typography } from '@mui/material';
import DialogCart from '../Cart';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

function ButtonBuy() {
  const [openDialog, setOpenDialog] = useState(false);
  
  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        sx={{ borderRadius: '4px' }}
        color="primary"
        onClick={() => setOpenDialog(true)}
      >
        <Typography variant="">Mua ngay </Typography>
        <ArrowForwardIcon fontSize="small" />
      </Button>
      <DialogCart openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </div>
  );
}

export default ButtonBuy;
