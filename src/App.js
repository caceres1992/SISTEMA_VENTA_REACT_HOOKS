
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Venta from "./pages/Venta";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import "./index.css";
import Producto from "./pages/Producto";
import Cliente from "./pages/Cliente";
import IngresoProductos from "./pages/IngresoProductos";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact  path="/dashboard" component={Home} />
          <Route exact path="/productos" component={Producto} />
          <Route exact path="/ventas" component={Venta} />
          <Route exact path="/clientes" component={Cliente} />
          <Route exact path="/IngresoProductos" component={IngresoProductos} />
          <Route exact path="/Categorias" component={Category} />

        </Main>
      </Switch>
    </div>
  );
}

export default App;
