import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProductsContext from "../../contexts/ProductsContext";
import ProductsService from "../../services/ProductsService";
import Breadcrumbs from "./components/Breadcrumbs";
import Filters from "./components/Filters";

function Product({ id, image, name, price }) {
  return (
    <Link className="products__card card" to={`/product/${id}`}>
      <li className="card">
        <img className="card__img" src={image} alt="" />
        <p className="card__description">{name}</p>
        <p className="card__price">R$ {price}</p>
      </li>
    </Link>
  );
}

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  const { setProductsList } = useContext(ProductsContext);
  const { filter } = useContext(FilterContext);
  const { addRequest, removeRequest } = useContext(LoadingContext);
  const { setMessage } = useContext(MessageContext);

  // eslint-disable-next-line
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
                <Product
                  key={p.sku}
                  id={p.sku}
                  image={p.image}
                  name={p.name}
                  price={p.price}
                />
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
