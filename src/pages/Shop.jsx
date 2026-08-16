import { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import products from "../data/products";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Beauty",
  "Accessories",
  "Home & Living",
  "Sports",
];

const Shop = () => {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const searchQuery =
    searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [sortBy, setSortBy] = useState("default");

  const [showFilters, setShowFilters] =
    useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    /* Search */
    if (searchQuery) {
      const query = searchQuery.toLowerCase();

      result = result.filter((product) => {
        return (
          product.name
            .toLowerCase()
            .includes(query) ||
          product.category
            .toLowerCase()
            .includes(query)
        );
      });
    }

    /* Category */
    if (selectedCategory !== "All") {
      result = result.filter(
        (product) =>
          product.category === selectedCategory
      );
    }

    /* Sorting */
    if (sortBy === "price-low") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortBy === "price-high") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sortBy === "rating") {
      result.sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (sortBy === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [
    searchQuery,
    selectedCategory,
    sortBy,
  ]);

  const clearSearch = () => {
    setSearchParams({});
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSortBy("default");
    setSearchParams({});
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero / Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">

          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Discover
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shop Our Products
          </h1>

          <p className="mt-3 max-w-2xl text-gray-500">
            Discover premium products designed
            for modern living.
          </p>

        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Search Result */}
        {searchQuery && (
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 px-5 py-4">

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                Search Results
              </p>

              <p className="mt-1 text-lg font-bold text-gray-900">
                "{searchQuery}"
              </p>
            </div>

            <button
              onClick={clearSearch}
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:text-indigo-600"
            >
              <X size={16} />
              Clear Search
            </button>

          </div>
        )}

        {/* Toolbar */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Category */}
          <div className="hidden items-center gap-2 overflow-x-auto lg:flex">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() =>
              setShowFilters(!showFilters)
            }
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 lg:hidden"
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>

          {/* Sort */}
          <div className="flex items-center gap-3">

            <span className="hidden text-sm text-gray-500 sm:block">
              Sort by:
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500"
            >
              <option value="default">
                Featured
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>

              <option value="rating">
                Highest Rated
              </option>

              <option value="name">
                Name: A-Z
              </option>
            </select>

          </div>
        </div>

        {/* Mobile Categories */}
        {showFilters && (
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 lg:hidden">

            <p className="mb-4 text-sm font-bold text-gray-900">
              Categories
            </p>

            <div className="flex flex-wrap gap-2">

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowFilters(false);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}

            </div>
          </div>
        )}

        {/* Result Count */}
        <div className="mb-5 flex items-center justify-between">

          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>

          {(selectedCategory !== "All" ||
            searchQuery ||
            sortBy !== "default") && (
            <button
              onClick={clearFilters}
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Clear All
            </button>
          )}

        </div>

        {/* Products */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-20 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Search
                size={28}
                className="text-gray-400"
              />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              No products found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Try searching for another product or
              changing your filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              View All Products
            </button>

          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        )}

      </div>
    </main>
  );
};

export default Shop;