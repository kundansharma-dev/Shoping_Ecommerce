import {
  Heart,
  ShoppingBag,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const discount = product.oldPrice
    ? Math.round(
        ((product.oldPrice - product.price) /
          product.oldPrice) *
          100
      )
    : 0;

  const wishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product, 1);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    toggleWishlist(product);
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60">

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg--100">

        <Link to={`/product/${product.id}`}>
          {discount > 0 && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white">
              -{discount}%
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className={`absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:bg-white ${
            wishlist
              ? "text-red-500"
              : "text-gray-600 hover:text-red-500"
          }`}
          aria-label="Add to wishlist"
        >
          <Heart
            size={18}
            fill={
              wishlist
                ? "currentColor"
                : "none"
            }
          />
        </button>

      </div>

      {/* Content */}
      <div className="p-4">

        {/* Category */}
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
          {product.category}
        </p>

        {/* Product Name */}
        <Link
          to={`/product/${product.id}`}
          className="mt-1 block truncate text-base font-semibold text-gray-900 hover:text-indigo-600"
        >
          {product.name}
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">

          <Star
            size={15}
            className="fill-amber-400 text-amber-400"
          />

          <span className="text-sm font-medium text-gray-700">
            {product.rating}
          </span>

          <span className="text-xs text-gray-400">
            ({product.reviews})
          </span>

        </div>

        {/* Price + Cart */}
        <div className="mt-4 flex items-center justify-between gap-3">

          <div className="flex items-center gap-2">

            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>

            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.oldPrice}
              </span>
            )}

          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white transition hover:bg-indigo-600"
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;