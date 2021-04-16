import React from 'react';

//services
import editProduct from '../../services/products/editProduct';

import ContextProducts from './contextProducts';

export default class UserProvider extends React.Component{
    constructor(props){
        super(props);
        this.changeFilters = this.changeFilters.bind(this);
        this.changeProducts = this.changeProducts.bind(this);
        this.toggleError = this.toggleError.bind(this);
    }

   state={
        filters:{
            section:false,
            tags:[],
            marcs:false
        },
        products:[],
        error:false
   }

    changeFilters(filters){
        this.setState(()=>{
            return{
                ...state,
                filters
            }
        })
    }

    changeProducts(products){
        this.setState(()=>{
            return{
                ...state,
                products
            }
        })
    }

    toggleError(error){
        this.setState(()=>{
            return{
                ...state,
                error
            }
        })
    }

    render(){
        return(
            <ContextProducts.Provider value={{
                controlProducts:{
                    changefilters:this.changeFilters,
                    changeproducts:this.changeProducts,
                    toggleerror:this.toggleError
                },
                productsData:{
                    
                    error:this.state.error,
                    products:this.state.products,
                    filters:this.state.filters

                }
            }}>
                {this.props.children}
            </ContextProducts.Provider>
        )
    }
    
}