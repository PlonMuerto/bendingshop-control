import React from 'react';
import ContextProduct from './contextProduct';

function withProduct(Component){
    return function userComponent(props){
        return (
            <ContextProduct.Consumer>
                {
                    (product) => <Component {...props} {...product} />
                }
            </ContextProduct.Consumer>
        )
    }
}
export {withProduct};