import React from 'react';

//services
import editProduct from '../../services/products/editProduct';

import ContextUser from './contextProduct';

export default class UserProvider extends React.Component{
    constructor(props){
        super(props);
        this.changeProduct = this.changeProduct.bind(this);
        this.changeId = this.changeId.bind(this);
        this.update = this.update.bind(this);
        this.toggleProduct = this.toggleProduct.bind(this);
    }

   state={
       product:{},
       id:null,
       change:false,
   }

   changeProduct({data}){
       console.log(data);
        this.setState(state=>{
            return {
                ...state,
                product:data,
                change:true
            }
        });
   }

   changeId(id){
        this.setState(state=>{
            return {
                ...state,
                id
            }
        });
   }

   toggleProduct(value){
        
        this.setState(state=>{
            let config={
                ...state,
                change:value
            }
            if(!value){
                config.product={};
            }
            return config;
        });
   }

   async update(productup){
        let product = await editProduct(productup);
        this.changeProduct({});
        this.changeId(false);
   }

    render(){
        return(
            <ContextUser.Provider value={{
                controlProduct:{
                    changeid:this.changeId,
                    changeproduct:this.changeProduct,
                    update:this.update,
                    toggle:this.toggleProduct
                },
                productData:this.state
            }}>
                {this.props.children}
            </ContextUser.Provider>
        )
    }
    
}