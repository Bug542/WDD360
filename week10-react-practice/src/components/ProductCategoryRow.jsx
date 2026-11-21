export default function ProductCategoryRow({ category }) {
  return (
    <tr className="category-row">
      <th colSpan={3} scope="rowgroup">{category}</th>
    </tr>
  );
}
