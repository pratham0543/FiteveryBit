import React from 'react'
import { SpeedDial } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Whatsapplink = () => {
  return (
    <a href='https://wa.me/919999999999' target="_blank">
    <SpeedDial
    ariaLabel="SpeedDial basic example"
    sx={{ position: 'fixed', bottom: 16, right: 16 }}
    FabProps={{
        sx: {
          bgcolor: 'secondary.main',
          '&:hover': {
            bgcolor: 'secondary.main',
          }
        }
      }}
    icon={<WhatsAppIcon />}
    
  >
    
  </SpeedDial>
  </a>
  )
}

export default Whatsapplink