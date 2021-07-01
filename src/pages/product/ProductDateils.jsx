import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductsContext from "../../contexts/ProductsContext";
import Breadcrumbs from "../../pages/products/components/Breadcrumbs";
import ProductContainer from "./components/ProductContainer";

function ProductDateils() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { productsList } = useContext(ProductsContext);

  useEffect(() => {
    let productFiltred = productsList.filter((product) => product.sku == id);
    setProduct(productFiltred[0]);
  }, [id]);

  return (
    <div className="main">
      <Breadcrumbs />
      <ProductContainer product={product} />
    </div>
  );
}

export default ProductDateils;
