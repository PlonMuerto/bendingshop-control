import React from 'react';
import ContextProducts from './contextProducts';

export function withUser(Component){
    return function userComponent(props){
        return (
            <ContextProducts.Consumer>
                {
                    (products) => <Component {...props} {...products} />
                }
            </ContextProducts.Consumer>
        )
    }
}
