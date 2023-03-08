import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const TopHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Toolbar sx={{
      bgcolor: '#F2F2F2',  // Set a light gray background color
      height: '80px',     // Increase the height of the toolbar
      color: '#333333',    // Set a dark gray font color
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: isMobile ? 'column' : 'row', // Use column direction for mobile devices
      padding: isMobile ? '10px 20px' : '0 20px' // Add some padding for mobile devices
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        margin: isMobile ? '10px 0' : 0 // Add margin for mobile devices
      }}>
        <Typography component="label" sx={{ color: '#333333', fontWeight: 'bold', fontSize: isMobile ? '16px' : '24px', marginRight: isMobile ? '10px' : '20px' }}>
          VALLEY
        </Typography>
        <Typography component="label" sx={{ color: '#E31E24', fontWeight: 'bold', fontSize: isMobile ? '16px' : '24px' }}>AIRCRAFT MAINTENANCE
        </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        margin: isMobile ? '10px 0' : 0, // Add margin for mobile devices
        flexGrow: 1, // Use flexGrow to push the select and account to the right
        justifyContent: isMobile ? 'space-between' : 'flex-end' // Use space-between for mobile devices
      }}>
        {!isMobile && ( // Hide the menu items for mobile devices
          <>
            <Typography variant="body1" sx={{ fontWeight: 'bold', marginRight: '20px', color: '#333333' }}>
              HOME
            </Typography>
          </>
        )}
          <Select
          value={'USA'}
          sx={{
            marginRight: isMobile ? '8px' : '20px',
            width: '90px',
            height: '35px',
            borderRadius: '4px',
            padding: '4px 4px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
            '& .MuiSelect-icon': {
              color: '#333333'
            }
          }}
        >
          <MenuItem value={'USA'} sx={{ fontWeight: 'normal', color: '#333333', fontSize: '12px', height: '20px', width: '90px' }}>USA</MenuItem>
          <MenuItem value={'CANADA'} sx={{ fontWeight: 'normal', color: '#333333', fontSize: '12px',  height: '20px', width: '90px' }}>CANADA</MenuItem>
        </Select>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333333', marginRight: isMobile ? '10px' : '20px' }}>
        SHOP
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', marginRight: isMobile ? '0px' : '20px', color: '#333333' }}>
        CONTACT US
        </Typography>
      </Box>
    </Toolbar>);
}

export default TopHeader;
