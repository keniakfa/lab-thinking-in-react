import ProductRow from './ProductRow';

export default function ProductTable(props) {
  const { products } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            price={product.price}
            name={product.name}
          />
        ))}
      </tbody>
    </table>
  );
}
