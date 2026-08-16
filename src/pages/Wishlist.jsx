import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-6 py-16">
        <div className="text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
            <Heart size={32} />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Your Wishlist is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Save your favorite products here for later.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Explore Products
            <ShoppingBag size={17} />
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Your Favorites
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Wishlist
          </h1>

          <p className="mt-3 text-gray-500">
            {wishlist.length}{" "}
            {wishlist.length === 1
              ? "product"
              : "products"}{" "}
            saved.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {wishlist.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >

              {/* Image */}
              <Link
                to={`/product/${product.id}`}
                className="relative block aspect-square overflow-hidden bg-gray-100"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </Link>

              {/* Content */}
              <div className="p-5">

                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                  {product.category}
                </p>

                <Link
                  to={`/product/${product.id}`}
                  className="mt-2 block font-bold text-gray-900 hover:text-indigo-600"
                >
                  {product.name}
                </Link>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-5 flex gap-2">

                  <button
                    onClick={() => {
                      addToCart(product);
                      removeFromWishlist(product.id);
                    }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
                  >
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>

                  <button
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 size={17} />
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Wishlist;