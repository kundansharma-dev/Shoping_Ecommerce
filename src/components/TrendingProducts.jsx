import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 129,
    oldPrice: 179,
    rating: 4.8,
    reviews: 324,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Classic Minimal Watch",
    category: "Accessories",
    price: 89,
    oldPrice: 119,
    rating: 4.7,
    reviews: 186,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Modern Casual Sneakers",
    category: "Fashion",
    price: 74,
    oldPrice: 99,
    rating: 4.9,
    reviews: 452,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Premium Leather Backpack",
    category: "Accessories",
    price: 95,
    oldPrice: 135,
    rating: 4.6,
    reviews: 217,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 149,
    oldPrice: 199,
    rating: 4.8,
    reviews: 391,
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Essential Skincare Set",
    category: "Beauty",
    price: 59,
    oldPrice: 79,
    rating: 4.7,
    reviews: 268,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Modern Ceramic Table Lamp",
    category: "Home & Living",
    price: 45,
    oldPrice: 65,
    rating: 4.5,
    reviews: 143,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Performance Running Shoes",
    category: "Sports",
    price: 109,
    oldPrice: 149,
    rating: 4.8,
    reviews: 306,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80",
  },
];

const TrendingProducts = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Trending now
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popular Products
            </h2>

            <p className="mt-3 max-w-xl text-gray-500">
              Discover products our customers are loving right now.
            </p>
          </div>

          <button className="self-start text-sm font-semibold text-gray-900 transition hover:text-indigo-600">
            View all products →
          </button>

        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrendingProducts;