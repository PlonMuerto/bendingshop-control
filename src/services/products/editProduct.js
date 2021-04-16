import axios from 'axios';
import {server} from '../config.json';

const getProducts = async function(id,update){
    return await axios.get(server+'/creator/getproduct',{
        id,
        update
    });
}

export default getProducts;