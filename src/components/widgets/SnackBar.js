import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.isOpenSnackbar);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.disableError();
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
       
      {!props.isError ?  <Alert onClose={handleClose} severity="success">Task Added!</Alert> 
          : <Alert onClose={handleClose} severity="error">{props.errorMessage}</Alert> 
        }

       
        {/* <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert> */}
      </Snackbar>
    </div>
  );
}
