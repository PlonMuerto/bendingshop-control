//pages
import Home from './pages/home/home';
import Products from './pages/products/products';
import Sells from './pages/sells/sells';
import Users from './pages/users/users';
import Messages from './pages/messages/messages';
import Login from './pages/login/login';

//layout
import Navegacion from './layout/navegacion/navegacion';

//context

//hooks

//styles
import './App.css';

import { Route, Redirect } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      {/*provedores context*/}

      {/* tosts portal(mensajes) */}

      {/*header*/}
      <Navegacion />

      <div className="conteiner">
        {/* redirecciones */}
        <Redirect from="/" to="/home" />
        <Redirect from="/inicio" to="/home"/>
        <Redirect from="/index" to="/home" />

        {/* rutas paginas */}
        <Route component={Home} exact path="/home"/>

        <Route component={Users} exact path="/users" />

        <Route component={Products} exact path="/products" />

        <Route component={Sells} exact path="/sells" />

        <Route component={Messages} exact path="/messages" />

        <Route component={Login} exact path="/login" />
        
      </div>

      {/*footer*/}

      {/*provedores context end*/}
    </div>
  );
}

export default App;
