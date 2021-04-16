import axios from 'axios';
import {server} from '../config.json';

const newProduct =async function(data){
    let creator = await axios.post(server+'/creator/newproducts' ,data,
        {headers:{
            'Content-type': 'multipart/form-data'
        }}

    );
    return creator;
}

export default newProduct;