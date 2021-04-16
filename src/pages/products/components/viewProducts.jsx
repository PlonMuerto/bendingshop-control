import React from 'react';

//consumer
import {withProduct} from '../../../context/product/withProduct';

//services
import getProducts from '../../../services/products/getProducts';
import deleteProduct from '../../../services/products/deleteProduct';
import getProduct from '../../../services/products/getProduct';


//css
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class ViewProducts extends React.Component {
    constructor(props){
        super(props);
        this.chargeProducts = this.chargeProducts.bind(this);
    }

    state={
        products:[]
    };

    componentDidMount() {
        this.chargeProducts();
    }

    async chargeProducts(){
        let products = await getProducts();
        this.setState(state=>{
            return{
                ...state,
                products:products.data.docs
            };
        });
    }

    async editProduct(id){
        let act = await getProduct(id);
        this.props.controlProduct.changeid(id);
        console.log(act);
        this.props.controlProduct.changeproduct(act);
        this.props.controlProduct.toggle(true);

    }

    async deleteproduct(id){
        try{
            let products = await deleteProduct(id);
            

            this.chargeProducts();
        }catch(err){
            console.log(err);
        }
    }

    
    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Nombre Producto</TableCell>
                        <TableCell>Imagen</TableCell>
                        <TableCell align="right">Cantidad de unidades</TableCell> 
                        <TableCell align="right">Precio Base</TableCell>
                        <TableCell align="center">Descripcion</TableCell>
                        <TableCell align="right">Section</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody style={{overflowX:'auto'}}>
                    {this.state.products.map((product) => (
                        <TableRow key={product.name} style={{width:'1200px'}}>
                            <TableCell component="th">
                                {product.name}
                                <TableCell>
                                    <span onClick={()=>{ this.deleteproduct(product._id)}}>borrar</span>
                                    <span onClick={()=>{ this.editProduct(product._id)}}>editar</span>
                                </TableCell>
                            </TableCell>
                            <TableCell component='figure' style={{maxWidth:'200px',maxHeight:'170px'}}>
                                <img style={{width:'100%',maxHeight:'170px'}} src={"http://localhost:3500/"+product.images[0]} />
                            </TableCell>
                            <TableCell align="center">{product.stock}</TableCell>
                            <TableCell align="center">{product.price}</TableCell>
                            <TableCell align="left" style={{width:'30%'}} scope="row">{product.description}</TableCell>
                            <TableCell align="left">{product.section.map(e=>{return <span>{e}</span>})}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

}

export default withProduct(ViewProducts);