
import axios from 'axios';
import {server} from '../config.json';

const getProducts = async function(id){
    return await axios.get(server+'/products/product/'+id);
}

export default getProducts;