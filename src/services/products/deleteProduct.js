import axios from 'axios';
import {server} from '../config.json';

const getProducts = async function(id){
    return await axios.post(server+'/creator/delete',{id});
}

export default getProducts;