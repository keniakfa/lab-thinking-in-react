import { useState } from 'react';
import data from './data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default function ProductPage() {
  const [products] = useState(data);
  const [productsFiltred, setProductsFiltred] = useState(products);

  function searchProduct(p) {
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(p.toLowerCase());
    });
    setProductsFiltred(filteredProducts);
  }
  return (
    <>
      <SearchBar searchProduct={searchProduct} />
      <ProductTable products={productsFiltred} />
    </>
  );
}
