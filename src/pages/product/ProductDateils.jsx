import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ProductsContext from "../../contexts/ProductsContext";
import Breadcrumbs from "../../pages/products/components/Breadcrumbs";
import BoxSize from "./components/BoxSize";
import styled from "styled-components";

function ProductDateils() {
  let sizes = [4, 6, 8, 10];
  let productSizeDefault = 6;
  let index = sizes.indexOf(productSizeDefault);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [productSize, setProductSize] = useState(productSizeDefault);
  const [selectedIndex, setSelectedSize] = useState(productSizeDefault);

  const { productsList } = useContext(ProductsContext);

  useEffect(() => {
    let productFiltred = productsList.filter((product) => product.sku == id);
    setProduct(productFiltred[0]);
  }, [id]);

  useEffect(() => {
    setSelectedSize(index);
  }, []);

  const ProductContainer = styled.div``;

  function changeSize(event) {
    let size = event.target.value;
    index = sizes.indexOf(size);
    setSelectedSize(index);
    setProductSize(size);
  }

  return (
    <div className="main">
      <Breadcrumbs />
      <div className="product_container">
        <section className="product_image">
          <img className="p_image" src={product.image} />
        </section>
        <section className="product_description">
          <h1 className="product_title">{product.name}</h1>
          <article className="select_size">
            <h6>Selecionar o tamanho: {productSize}</h6>
            <ul className="box">
              {sizes.map((s, i) => (
                <BoxSize
                  key={i}
                  size={s}
                  selected={i == selectedIndex ? "selected_box" : ""}
                  changeSize={changeSize}
                />
              ))}
            </ul>
          </article>
          <article className="container_buy">
            <p className="product_price">R$ {product.price}</p>
            <div className="container_button">
              <Link className="link-box" to="/">
                <button className="btnDefault btnSucess">
                  Adicionar a sacola
                </button>
              </Link>
              <Link className="link-box" to="/">
                <button className="btnDefault btnCancel">
                  Cancelar
                </button>
              </Link>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default ProductDateils;
