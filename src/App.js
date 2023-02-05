import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";
import ProductUpdate from "./components/ProductUpdate";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/product/create" component={ProductCreate} />
          <Route exact path="/product/update/:id" component={ProductUpdate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
