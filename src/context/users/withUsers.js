import React from 'react';
import ContextUsers from './contextUsers';

export function withUser(Component){
    return function userComponent(props){
        return (
            <ContextUsers.Consumer>
                {
                    (users) => <Component {...props} {...users} />
                }
            </ContextUsers.Consumer>
        )
    }
}
