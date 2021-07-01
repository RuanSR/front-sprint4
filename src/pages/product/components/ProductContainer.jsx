import { useState, useEffect, useContext } from "react";
import MessageContext from "../../../contexts/MessageContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BoxSize from "./BoxSize";

function Product({ product }) {
  let productSizeDefault = 6;
  const [selectedIndex, setSelectedSize] = useState(productSizeDefault);
  const [productSize, setProductSize] = useState(productSizeDefault);

  const { setMessage } = useContext(MessageContext);

  let sizes = [4, 6, 8, 10];
  let index = sizes.indexOf(productSizeDefault);

  useEffect(() => {
    setSelectedSize(index);
  }, []);

  function changeSize(event) {
    let size = event.target.value;
    index = sizes.indexOf(size);
    setSelectedSize(index);
    setProductSize(size);
  }

  return (
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
              <button onClick={()=> {setMessage('Produto adicionado a sacola')}} className="btnDefault btnSucess">
                Adicionar a sacola
              </button>
            </Link>
            <Link className="link-box" to="/">
              <button className="btnDefault btnCancel">Cancelar</button>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Product;
