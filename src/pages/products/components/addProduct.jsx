import React from 'react';

//services
import NewProduct from '../../../services/products/newProduct';

//components
import AddTags from '../../../components/forms/addTag';
import AddImages from '../../../components/forms/addImages';

//css
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
  const [product, setProduct] = React.useState({
    name:undefined,
    stock:undefined,
    description:undefined,
    section:undefined,
    marcs:undefined,
    tags:[],
    images:[]
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //funciones estraer data components
  const setData = (event)=>{
    setProduct(state=>{return {...state, [event.target.name]: event.target.value} });
  }

  const setTags = (tags)=>{
    setProduct(state=>{
      return{
        ...state,
        tags
      }
    });
  };

  const setImages = (images)=>{
    setProduct(state=>{
      console.log(images);
      return{
        ...state,
        images
      }
    })
  };

  //funcion enviar producto
  const createProduct = async()=>{
      let productForm = new FormData();
      productForm.append('name',product.name);
      productForm.append('stock',product.stock);
      productForm.append('description',product.description);
      productForm.append('section',product.section);
      productForm.append('marcs',product.marcs);
      productForm.append('tags',product.tags);
      productForm.append('images',product.images);


      let tan = await NewProduct(productForm);
      console.log(tan);
  }

  return (
    <div>
        <div className="addProducts">

            
                <IconButton  onClick={handleClickOpen}>
                    <AddBoxIcon className="add" />
                </IconButton>
            
        </div>
        
        <Dialog onClose={handleClose} fullScreen  aria-labelledby="customized-dialog-title" open={open}>
            
        <DialogContent  >
          

            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Creando producto
            </DialogTitle>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField  
                        id="standard-error" 
                        label="Nombre" 
                        name="name"
                        onChange={setData}
                        placeholder="Nombre del producto." 
                        value={product.name}
                        helperText={(!product.name || product.name === '') ? "ingrese el nombre del producto" : null}
                        error={((!product.name || product.name === '')) ? true : null}
                        style={{width:'100%'}}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField  
                        id="standard-error-helper-text"
                        name="stock"
                        label="Cantidad"
                        onChange={setData}
                        value={product.stock}
                        placeholder="cantidad de unidades del producto"
                        helperText={(isNaN(product.stock)) ? "Incorrecta Cantidad." : null}
                        error={(isNaN(product.stock)) ? true : null}
                        style={{width:'100%'}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id="standard-multiline-static"
                    label="Descripcion"
                    onChange={setData}
                    name="description"
                    multiline
                    value={product.description}
                    rows={8}
                    helperText={(!product.description || product.description === '') ? "ingrese descripcion del producto" : null}
                    error={((!product.description || product.description === '')) ? true : null}
                    placeholder='Descripcion del producto'
                    style={{width:'100%'}}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        id="standard-select-currency"
                        name="section"
                        onChange={setData}
                        select
                        label="Seccion"
                        value={product.section}
                        helperText={(!product.section || product.section === '') ? "ingrese seccion del producto." : null}
                        error={(!product.section || product.section === '') ? true : false}
                        style={{width:'100%'}}
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
                        name="marcs"
                        select
                        onChange={setData}
                        label="promocion activa"
                        value={product.marcs}
                        helperText={(!product.marcs || product.marcs === '') ? "ingrese seccion del producto." : null}
                        error={(!product.marcs || product.marcs === '') ? true : false}
                        style={{width:'100%'}}
                    >
                        {marcs.map((marc) => (
                            <MenuItem key={marc} value={marc}>
                            {marc}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                
                <Grid item xs={6}>
                    <AddTags tags={tags} set={setTags} ></AddTags>
                </Grid>
                <Grid item xs={12}>
                  <AddImages set={setImages} />
                </Grid>
               
            </Grid>
            
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={createProduct} disabled={(!product.description || product.images == 0 || !product.marcs || !product.name || !product.section || !product.stock || product.tags == 0) ? true : false}  color="primary" >
            Crear Producto
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddProduct;
