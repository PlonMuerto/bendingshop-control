import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';



import Grid from '@material-ui/core/Grid';

//tipo de config
import {marcs,sections,tags} from '../../../data.json';




const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function AddProduct() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
        <div className="addProducts">

            
                <IconButton color="primary" onClick={handleClickOpen}>
                    <AddBoxIcon className="add" />
                </IconButton>
            
        </div>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            
        <DialogContent dividers>
          <Typography gutterBottom>
            ingrese datos basicos de el producto.

            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Creando producto
            </DialogTitle>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField  
                        id="standard-error" 
                        label="Nombre" 
                        placeholder="Nombre del producto." 
                        helperText="Incorrect entry." 
                        style={{width:'100%'}}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField  
                        id="standard-error-helper-text"
                        label="Cantidad"
                        placeholder="cantidad de unidades del producto"
                        helperText={"Incorrect entry."}
                        style={{width:'100%'}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id="standard-multiline-static"
                    label="Descripcion"
                    multiline
                    rows={5}
                    placeholder='Descripcion del producto'
                    style={{width:'100%'}}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Seccion"
                        value={sections}
                        helperText="Please select your currency"
                    >
                        {sections.map((section) => (
                            <MenuItem key={section} value={section}>
                            {section}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="promocion activa"
                        value={marcs}
                        helperText="Please select your currency"
                    >
                        {marcs.map((marc) => (
                            <MenuItem key={marc} value={marc}>
                            {marc}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    Tags
                </Grid>
               
            </Grid>
            
          </Typography>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddProduct;
