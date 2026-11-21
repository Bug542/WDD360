export default function SearchBar({
  searchText,
  onSearchChange,
  inStockOnly,
  onStockChange,
}) {
  return (
    <div className="filters">
      <label htmlFor="product-search">Search by product or category</label>
      <input
        id="product-search"
        type="search"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Try “mouse” or “tech”"
      />

      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(event) => onStockChange(event.target.checked)}
        />
        Only show items in stock
      </label>
    </div>
  );
}
