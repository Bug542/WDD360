export default function ProductRow({ product }) {
  return (
    <tr>
      <th scope="row">{product.name}</th>
      <td>{product.price}</td>
      <td>
        <span className={product.stocked ? 'status in-stock' : 'status out-of-stock'}>
          {product.stocked ? 'In stock' : 'Out of stock'}
        </span>
      </td>
    </tr>
  );
}
