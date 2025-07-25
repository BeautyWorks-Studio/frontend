// src/pages/Products.jsx
import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const images = import.meta.glob('../assets/img*.jpeg', { eager: true });

function buildProducts() {
  const list = Object.entries(images).map(([path, mod]) => {
    const match = path.match(/img(\d+)\.jpeg$/i);
    const num = match ? Number(match[1]) : 0;

    let category = 'makeup';
    if (num >= 1 && num <= 11) category = 'wigs';
    else if (num >= 12 && num <= 20) category = 'skincare';
    else if (num >= 21 && num <= 28) category = 'makeup';
    else if (num >= 29 && num <= 39) category = 'hairproducts';
    else if (num >= 40 && num <= 44) category = 'brusheselectronics';

    return {
      id: num,
      name: `Product ${num}`,
      price: (num * 3 + 19).toFixed(2), // mock price
      category,
      src: mod.default,
    };
  });

  const byCategory = {
    wigs: [],
    skincare: [],
    makeup: [],
    hairproducts: [],
    brusheselectronics: [],
  };

  list.forEach((p) => {
    if (byCategory[p.category]) byCategory[p.category].push(p);
  });

  Object.values(byCategory).forEach((arr) => arr.sort((a, b) => a.id - b.id));
  return byCategory;
}

export default function Products() {
  const [params] = useSearchParams();
  const selectedCategory = params.get('category');
  const searchTerm = (params.get('search') || '').toLowerCase();

  const categories = useMemo(buildProducts, []);
  const { addToCart, removeFromCart } = useCart();

  const allSections = [
    { key: 'wigs', title: 'Wigs' },
    { key: 'skincare', title: 'Skincare' },
    { key: 'makeup', title: 'Make‑up' },
    { key: 'hairproducts', title: 'Hair Products' },
    { key: 'brusheselectronics', title: 'Brushes & Electronics' },
  ];

  const sectionsToRender = selectedCategory
    ? allSections.filter((s) => s.key === selectedCategory)
    : allSections;

  const filterBySearch = (items) =>
    searchTerm
      ? items.filter((p) => p.name.toLowerCase().includes(searchTerm))
      : items;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          {selectedCategory ? sectionsToRender[0]?.title : 'Products'}
          {searchTerm && (
            <span className="text-lg font-normal text-gray-500 ml-2">
              – Results for &quot;{searchTerm}&quot;
            </span>
          )}
        </h1>

        {sectionsToRender.map(({ key, title }) => {
          const rawItems = categories[key] || [];
          const items = filterBySearch(rawItems);

          if (!items.length) return null;

          return (
            <section key={key} className="mb-14">
              {!selectedCategory && !searchTerm && (
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  {title}
                </h2>
              )}

              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col"
                  >
                    <div className="aspect-[4/3] bg-gray-100 rounded overflow-hidden mb-4">
                      <img
                        src={product.src}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm capitalize">
                      {product.category}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="font-semibold text-gray-900">
                        ${product.price}
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => addToCart(product)}
                          className="px-3 py-1.5 rounded bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                        >
                          Add
                        </button>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="px-3 py-1.5 rounded border border-red-300 text-red-600 text-sm hover:bg-red-50 transition"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* If nothing matched, show a simple empty state */}
        {sectionsToRender.every(({ key }) => filterBySearch(categories[key] || []).length === 0) && (
          <p className="text-gray-500 text-lg">No products found.</p>
        )}
      </div>
    </div>
  );
}