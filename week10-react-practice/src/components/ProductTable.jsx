import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

export default function ProductTable({ products }) {
  if (products.length === 0) {
    return (
      <p className="empty-state" role="status">
        No products match your filters. Try a different search.
      </p>
    );
  }

  const rows = [];
  let previousCategory = null;

  for (const product of products) {
    if (product.category !== previousCategory) {
      rows.push(
        <ProductCategoryRow
          key={`category-${product.category}`}
          category={product.category}
        />
      );
      previousCategory = product.category;
    }

    rows.push(<ProductRow key={product.id} product={product} />);
  }

  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
