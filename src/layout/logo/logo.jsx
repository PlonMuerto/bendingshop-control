//importando imagen
import Imagen from './img/handelcorpLogo.jpg';

//css
import './logo.css';

const Logo = function(props){

    return (
        <figure className="logoConteiner">
            <img className="Logo" src={Imagen} alt="Logo" />
        </figure>
    );
};

export default Logo;