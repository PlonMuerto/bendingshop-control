import React from 'react';

//services
import apiUser from '../../services/apiUser';

import ContextUser from './contextUser';

export default class UserProvider extends React.Component{
    constructor(props){
        super(props);
        this.auth = this.auth.bind(this);
        this.unAuth = this.unAuth.bind(this);
        this.infoUpdate = this.infoUpdate.bind(this);
        this.deleteInfo = this.deleteInfo.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    state = {
        auth:false,
        type:undefined,
        token:undefined,
        info:{}
    }

    componentDidMount(){
        this.auth();
    }

    auth(token = window.localStorage.getItem('tokenHandelAuth'),type = window.localStorage.getItem('typeHandelUser')){
        window.localStorage.setItem('tokenHandelAuth',token);
        window.localStorage.setItem('typeHandelUser',type);
        this.setState((state)=>{
            return{
                ...state,
                auth:true,
                token,
                type
            }
        })
        this.updateUser();
    }

    unAuth(){
        window.localStorage.removeItem('tokenHandelAuth');
        window.localStorage.removeItem('typeHandelUser');
        this.setState(state=>{
            return {
                ...state,
                auth:false,
                token:undefined,
                type:undefined
            }
        })
    }

    infoUpdate(data){
        this.setState(state=>{
            return {
                ...state,
                info:data
            }
        });
    }

    async updateUser(){
        const tokenConst = window.localStorage.getItem('tokenHandelAuth');
        const typeConst = window.localStorage.getItem('typeHandelUser');
        if(tokenConst &&  typeConst){
            try{
                
                console.log('eo');
                const data = await apiUser.userData();
                if(data.data.userData){
                    this.infoUpdate(data.data.userData);
                }
            }
            catch(err){
                
                this.unAuth();
            }
        }else{
            alert('mmm');
        }
    }

    deleteInfo(){
        this.setState(state => {
            return{
                ...state,
                info:{

                }
            }
        });
    }

    

    render(){
        return(
            <ContextUser.Provider value={{userData:{token:this.state.token,type:this.state.type,auth:this.state.auth,info:this.state.info},userControl:{
                update:this.infoUpdate,
                close:this.deleteInfo,
                auth:this.auth,
                unauth:this.unAuth
            }}}>
                {this.props.children}
            </ContextUser.Provider>
        )
    }
    
}