import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Message from "./components/Message";
import Spinner from "./components/Spinner";
import CategoriesContext from "./contexts/CategoriesContext";
import ProductsContext from "./contexts/ProductsContext";
import FilterContext from "./contexts/FilterContext";
import LoadingContext from "./contexts/LoadingContext";
import MessageContext from "./contexts/MessageContext";
import useLoading from "./hooks/useLoading";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDateils from "./pages/product/ProductDateils";
import CategoriesService from "./services/CategoriesService";
import { GlobalStyle } from "./components/GlobalStyle";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState({});
  const [addRequest, removeRequest, isLoading] = useLoading();

  // eslint-disable-next-line
  useEffect(() => loadCategories(), []);

  function loadCategories() {
    addRequest();
    CategoriesService.get()
      .then((c) => setCategories(c))
      .catch(() => setMessage("Ocorreu um erro ao carregar as categorias..."))
      .finally(() => removeRequest());
  }

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <LoadingContext.Provider value={{ addRequest, removeRequest, isLoading }}>
        <MessageContext.Provider value={{ message, setMessage }}>
          <CategoriesContext.Provider value={{ categories }}>
            <ProductsContext.Provider value={{productsList, setProductsList}}>
              <GlobalStyle />
              <Spinner />
              <Router>
                <div className="page-container">
                  <Message />
                  <Header />
                  <Switch>
                    <Route exact path="/">
                      <ProductsPage />
                    </Route>
                    <Route exact path="/product/:id">
                      <ProductDateils />
                    </Route>
                  </Switch>
                </div>
                <Footer />
              </Router>
            </ProductsContext.Provider>
          </CategoriesContext.Provider>
        </MessageContext.Provider>
      </LoadingContext.Provider>
    </FilterContext.Provider>
  );
}

export default App;
