import React, {useState} from 'react';

//providers
import ScreenProduct from '../../context/product/screenProduct';

//components
import AddProduct from './components/addProduct';
import EditProduct from './components/editProduct';
import Filter from './components/filter';
import ViewProducts from './components/viewProducts';


//css
import './products.css';


export default class Products extends React.Component{

    state={
        act:true,
        id:false
    }

    constructor(props){
        super(props);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.changeProduct = this.changeProduct.bind(this);
    }  

    toggleEdit(){
        this.setState(state=>{
            return {
                ...state,
                act:!state.act
            }
        })
    } 

    changeProduct(id){
        this.setState(
            state => {
                return{
                    ...state,
                    id
                }
            }
        )
    }

    render(){ 
        return(
            <div className="productsConteiner">
                <ScreenProduct>
                    <AddProduct  />
                    <ViewProducts />
                    <EditProduct />
                </ScreenProduct>
            </div>
        );
    }
}
