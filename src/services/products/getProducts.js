import axios from 'axios';
import {server} from '../config.json';

const getProducts = async function(filtros){
    return await axios.get(server+'/products/todos');
}

export default getProducts;