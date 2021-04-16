import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

//consumer
import {withProduct} from '../../../context/product/withProduct';

//services
import GetProduct from '../../../services/products/getProduct';
import EditProduct from '../../../services/products/editProduct';


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

function EditorProduct(props) {
  
  
  const [product, setProduct] = React.useState({
    name:undefined,
    stock:undefined,
    description:undefined,
    section:undefined,
    marcs:undefined,
    tags:[],
    images:[],
    price:0
  });

  useEffect(
    ()=>{
      chargeProduct();
      console.log(product)
    },
    [props.productData.product]
  )

  const handleClick=function(value){
    props.controlProduct.toggle(value);

  }
 
  const chargeProduct = () => {
    setProduct(async state=>{
        let producto = await props.productData.product;
        console.log(producto);
        return producto;
    });
  }

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
     
      return{
        ...state,
        images
      }
    })
  };
  
  //funcion enviar producto
  const createProduct = async()=>{
      let images = product.images;
      let productForm = new FormData();
      productForm.append('name',product.name);
      productForm.append('stock',product.stock);
      productForm.append('price',product.price);
      productForm.append('description',product.description);
      productForm.append('section',product.section);
      productForm.append('marcs',product.marcs);
      productForm.append('tags',product.tags);

      for (let i = 0; i < images.length; i++){
        productForm.append('files[' + i + ']', images[i]);
      }
      handleClick(false);
       
      alert(JSON.stringify(product));
      
      
  }

  return (
    <div>
        
        <Dialog onClose={()=>{handleClick(false)}} fullScreen  aria-labelledby="customized-dialog-title" open={props.productData.change}>
            
        <DialogContent  >
          

            <DialogTitle id="customized-dialog-title" onClose={()=>{handleClick(false)}}>
                Editando producto
            </DialogTitle>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField  
                        id="standard-error" 
                        label="Nombre" 
                        name="name"
                        onChange={setData}
                        placeholder="Nombre del producto." 
                        value={product.name || props.productData.product.name}
                        helperText={(!product.name || product.name === '') ? "ingrese el nombre del producto" : null}
                        error={((!product.name || product.name === '')) ? true : null}
                        style={{width:'100%'}}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField  
                        id="standard-error-helper-text"
                        name="stock"
                        label="Cantidad"
                        onChange={setData}
                        value={product.stock || props.productData.product.stock}
                        placeholder="cantidad de unidades del producto"
                        helperText={(isNaN(product.stock)) ? "Incorrecta Cantidad." : null}
                        error={(isNaN(product.stock) || product.stock <= 0) ? true : null}
                        style={{width:'100%'}}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField  
                        id="standard-error-helper-text"
                        name="price"
                        label="Precio"
                        onChange={setData}
                        value={product.price || props.productData.product.price}
                        placeholder="precio producto"
                        helperText={(isNaN(product.price)) ? "Incorrecta Cantidad." : null}
                        error={(isNaN(product.price) || product.price <= 0) ? true : null}
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
                    value={product.description || props.productData.product.description}
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
                        value={product.section || props.productData.product.section}
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
                        value={product.marcs || props.productData.product.marcs}
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

export default withProduct(EditorProduct);
