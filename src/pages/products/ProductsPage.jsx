import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProductsContext from "../../contexts/ProductsContext";
import ProductsService from "../../services/ProductsService";
import Breadcrumbs from "./components/Breadcrumbs";
import Product from "./components/Product";
import Filters from "./components/Filters";


function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  const { setProductsList } = useContext(ProductsContext);
  const { filter } = useContext(FilterContext);
  const { addRequest, removeRequest } = useContext(LoadingContext);
  const { setMessage } = useContext(MessageContext);

  useEffect(() => loadProducts(), []);

  function loadProducts() {
    addRequest();
    ProductsService.get()
      .then((r) => {
        setProducts(r.products);
        setProductsList(r.products);
        setFilters(r.filters);
      })
      .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
      .finally(() => removeRequest());
  }

  return (
    <main className="main">
      <Breadcrumbs></Breadcrumbs>
      <Filters filters={filters}></Filters>
      <section className="main__products products">
        <div className="products__row">
          <ol className="products__list">
            {products
              .filter((p) =>
                filter
                  ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1
                  : true
              )
              .map((p) => (
                <Link className="products__card card" to={`/product/${p.sku}`}>
                  <Product
                    key={p.sku}
                    id={p.sku}
                    image={p.image}
                    name={p.name}
                    price={p.price}
                  />
                </Link>
              ))}
          </ol>
        </div>
        <div className="products__row">
          <ol className="products__list"></ol>
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;
