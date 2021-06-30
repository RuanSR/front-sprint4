import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductsContext from "../../contexts/ProductsContext";
import Breadcrumbs from "../../pages/products/components/Breadcrumbs";
import styled from "styled-components";

function ProductDateils() {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  
  const { productsList } = useContext(ProductsContext);

  useEffect(() => {
    let productFiltred = productsList.filter((product) => product.sku == id);
    setProduct(productFiltred[0])
  }, [id]);
  
  const ProductContainer = styled.div``;

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
            <h6>Selecionar o tamanho: 6</h6>
            <ul className="box">
              <li className="box_size">4</li>
              <li className="box_size">6</li>
              <li className="box_size">8</li>
              <li className="box_size">10</li>
            </ul>
          </article>
          <article className="container_buy">
            <p className="product_price">R$ {product.price}</p>
            <div className="container_button">
              <button className="btnDefault btnSucess">Adicionar a sacola</button>
              <button className="btnDefault btnCancel">cancelar</button>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default ProductDateils;
