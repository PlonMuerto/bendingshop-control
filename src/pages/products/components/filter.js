import React, {useState} from 'react';

//materialComponents
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';

export default function Filter(props){

    const [filters, setFilters] = useState(
        {
            category:{
                accesorios:false,
                hogar:false,
                hombres:false,
                jugeteria:false,
                mayorista:false,
                promociones:false,
                salud:false,
            },
            price:[0,100000],
            tags:{
                descuento:false,
                envioFree:false,
                ultimos:false
            },
        }
    );

    props.upFilter(filters);

    function categoryChange(e){
        setFilters((state)=>{
            let categorys = state.category;
            categorys[e.target.name] = !categorys[e.target.name];
            let data = {
                ...state,
                category:categorys
            };
            props.upFilter(data);
            return data; 
        });
    }

    function tagsChange(e){
        setFilters((state)=>{
            let tags = state.tags;
            tags[e.target.name] = !tags[e.target.name];
            let data = {
                ...state,
                tags:tags
            };
            props.upFilter(data);
            return data;
        });
    }

    function priceChange(event){
        setFilters((state)=>{
            let actPrice = state.price;
            if(event.target.name === 'max'){
                    actPrice[1]=event.target.value;
            }else{
                    actPrice[0]=event.target.value;
            }
            let data ={
                ...state,
                price:actPrice
            };
            return data;
        });
    }

    return (
        <form id="productsFilter">
            <span className="titleFilter">Filtrar Productos</span>
            <span className="subtitleFilter">Categorias</span>
            <label htmlFor="accesorios">
                {/*<input type="checkbox" />*/}
                <Checkbox
                    name="accesorios"
                    defaultChecked
                    color="default"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    className="check"
                    checked={filters.category.accesorios}
                    onChange={categoryChange}
                />
                accesorios
            </label>
            <label htmlFor="hogar">
                {/*<input type="checkbox" name="hogar"/>*/}
                <Checkbox
                    defaultChecked
                    name="hogar"
                    color="default"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    className="check"
                    checked={filters.category.hogar}
                    onChange={categoryChange}
                />
                Hogar
            </label>
            <label htmlFor="hombres">
                {/*<input type="checkbox" name="hombres"/>*/}
                <Checkbox
                    defaultChecked
                    name="hombres"
                    color="default"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    className="check"
                    checked={filters.category.hombres}
                    onChange={categoryChange}
                />
                hombres
            </label>
            <label htmlFor="jugeteria">
                {/*<input type="checkbox" name="accesorios"/>*/}
                <Checkbox
                    defaultChecked
                    name="jugeteria"
                    color="default"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    className="check"
                    checked={filters.category.jugeteria}
                    onChange={categoryChange}
                />
                jugueteria
            </label>
            <label htmlFor="mayorista">
                {/*<input type="checkbox" name="mayorista"/>*/}
                <Checkbox
                    defaultChecked
                    name="mayorista"
                    color="default"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    className="check"
                    checked={filters.category.mayorista}
                    onChange={categoryChange}
                />
                mayorista
            </label>
            <label htmlFor="promociones">
                {/*<input type="checkbox" name="promociones"/>*/}
                <Checkbox
                    defaultChecked
                    name="promociones"
                    color="default"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    className="check"
                    checked={filters.category.promociones}
                    onChange={categoryChange}
                />
                promociones
            </label>
            <label htmlFor="salud">
                {/*<input type="checkbox" name="salud"/>*/}
                <Checkbox
                    defaultChecked
                    name="salud"
                    color="default"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    className="check"
                    checked={filters.category.salud}
                    onChange={categoryChange}
                    
                />
                salud
            </label>
            <span className="subtitleFilter">Precio</span>
            {/*<input type="range" list="tickmarks" className="range" />*/}
            <span className=" subtitleFilterPrice">Min:</span>
            <input type="number" placeholder="min: $5.000" onChange={priceChange} value={filters.price[0]} name='min' className="priceInput minPrice" min="5000" max="100000" />
            <span className=" subtitleFilterPrice">Max:</span>
            <input type="number" placeholder="max: $100.000" onChange={priceChange} name='max' value={filters.price[1]} className="priceInput maxPrice" min="5000" max="100000" />
            <span className="subtitleFilter">Tags</span>
            <label htmlFor="descuento">
                {/*<input type="checkbox" />*/}
                <Checkbox
                    name="descuento"
                    defaultChecked
                    color="default"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    className="check"
                    checked={filters.tags.descuento}
                    onChange={tagsChange}
                />
                con Descuento
            </label>
            <label htmlFor="envioFree">
                {/*<input type="checkbox" />*/}
                <Checkbox
                    name="envioFree"
                    defaultChecked
                    color="default"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    className="check"
                    checked={filters.tags.envioFree}
                    onChange={tagsChange}
                />
                Envio Gratis
            </label>
            <label htmlFor="ultimos">
                {/*<input type="checkbox" />*/}
                <Checkbox
                    name="ultimos"
                    defaultChecked
                    color="default"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    className="check"
                    checked={filters.tags.ultimos}
                    onChange={tagsChange}
                />
                apunto de terminarse
            </label>
        </form>
    )
}