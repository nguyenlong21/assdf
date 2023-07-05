import { Backdrop, CircularProgress } from '@mui/material';

function Logout() {
  return (
    <Backdrop sx={{ color: '#blue', background: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Logout;
