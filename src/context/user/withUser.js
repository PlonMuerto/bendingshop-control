import React from 'react';
import ContextUser from './contextUser';

export function withUser(Component){
    return function userComponent(props){
        return (
            <ContextUser.Consumer>
                {
                    (user) => <Component {...props} {...user} />
                }
            </ContextUser.Consumer>
        )
    }
}
