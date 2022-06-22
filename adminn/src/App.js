import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";
import {DrkModeContextProvider} from "./context/darkModeContext"

function App() {
  const protectedRoute =({children})=>{
    const {user} = useContext(AuthContext)

    if(!user){
      return <Navigate to="/login"/>
    }

    return children
  }
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          {/* <Route exact path="/"> */}
          <Route path="/"></Route>
          <Route path="login" element={<Login/>}/>
          <Route index element ={< protectedRoute>
            <Home />
          </protectedRoute>}>
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
