import { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import ProductTable from './components/ProductTable.jsx';

const products = [
  { id: 1, category: 'Study Essentials', name: 'Spiral Notebook', price: '$3.50', stocked: true },
  { id: 2, category: 'Study Essentials', name: 'Highlighter Set', price: '$5.00', stocked: true },
  { id: 3, category: 'Study Essentials', name: 'Planner', price: '$8.00', stocked: false },
  { id: 4, category: 'Tech', name: 'Wireless Mouse', price: '$18.00', stocked: true },
  { id: 5, category: 'Tech', name: 'USB-C Hub', price: '$24.00', stocked: false },
  { id: 6, category: 'Tech', name: 'Laptop Stand', price: '$27.00', stocked: true },
  { id: 7, category: 'Desk Setup', name: 'Desk Lamp', price: '$22.00', stocked: true },
  { id: 8, category: 'Desk Setup', name: 'Desk Organizer', price: '$12.00', stocked: false },
  { id: 9, category: 'Desk Setup', name: 'Water Bottle', price: '$14.00', stocked: true },
];

function FilterableProductTable({ items }) {
  const [searchText, setSearchText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchText.trim().toLowerCase()) ||
      item.category.toLowerCase().includes(searchText.trim().toLowerCase());
    return matchesSearch && (!inStockOnly || item.stocked);
  });

  return (
    <section className="finder" aria-labelledby="finder-title">
      <div className="intro">
        <span className="eyebrow">WDD 360 • Week 10</span>
        <h1 id="finder-title">Student Gear Finder</h1>
        <p>
          A small React project using reusable components, props, state,
          and events. Try searching or filtering the products.
        </p>
      </div>

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        inStockOnly={inStockOnly}
        onStockChange={setInStockOnly}
      />

      <div className="results-header">
        <h2>Available products</h2>
        <span aria-live="polite">
          {filteredProducts.length} of {items.length} items
        </span>
      </div>

      <ProductTable products={filteredProducts} />
      <p className="footnote">
        Built while following the official React “Thinking in React” tutorial.
      </p>
    </section>
  );
}

export default function App() {
  return <FilterableProductTable items={products} />;
}
