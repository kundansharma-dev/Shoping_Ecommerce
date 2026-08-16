import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Product Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The product you are looking for does not exist.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-flex rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  const wishlist = isInWishlist(product.id);

  const discount = Math.round(
    ((product.oldPrice - product.price) /
      product.oldPrice) *
      100
  );

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity((current) => current + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((current) => current - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // Related products
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-600"
          >
            <ArrowLeft size={17} />
            Back to Shop
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Image */}
            <div>
              <div className="relative overflow-hidden rounded-3xl bg-gray-100">

                {/* Discount */}
                {discount > 0 && (
                  <span className="absolute left-5 top-5 z-10 rounded-full bg-indigo-600 px-4 py-2 text-sm font-bold text-white">
                    -{discount}%
                  </span>
                )}

                {/* Wishlist */}
                <button
                  onClick={() =>
                    toggleWishlist(product)
                  }
                  className={`absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md ${
                    wishlist
                      ? "text-red-500"
                      : "text-gray-600 hover:text-red-500"
                  }`}
                >
                  <Heart
                    size={20}
                    fill={
                      wishlist
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                />
              </div>

              {/* Thumbnail */}
              <div className="mt-4">
                <div className="h-20 w-20 overflow-hidden rounded-xl border-2 border-indigo-600">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">

              {/* Category */}
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                {product.category}
              </p>

              {/* Name */}
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-3">

                <div className="flex items-center gap-1">
                  <Star
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />

                  <span className="font-semibold text-gray-900">
                    {product.rating}
                  </span>
                </div>

                <span className="text-gray-300">
                  |
                </span>

                <span className="text-sm text-gray-500">
                  {product.reviews} reviews
                </span>
              </div>

              {/* Price */}
              <div className="mt-7 flex flex-wrap items-center gap-3">

                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>

                <span className="text-lg text-gray-400 line-through">
                  ${product.oldPrice}
                </span>

                {discount > 0 && (
                  <span className="rounded-lg bg-green-50 px-3 py-1 text-sm font-semibold text-green-600">
                    Save {discount}%
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-6 leading-7 text-gray-500">
                {product.description}
              </p>

              {/* Stock */}
              <div className="mt-6">
                {product.stock <= 10 ? (
                  <p className="text-sm font-semibold text-orange-600">
                    Only {product.stock} left in stock
                  </p>
                ) : (
                  <p className="text-sm font-semibold text-green-600">
                    In stock
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div className="mt-7">

                <p className="mb-3 text-sm font-semibold text-gray-900">
                  Quantity
                </p>

                <div className="flex h-12 w-fit items-center rounded-xl border border-gray-200">

                  <button
                    onClick={decreaseQuantity}
                    className="flex h-full w-12 items-center justify-center text-gray-600 hover:text-indigo-600"
                  >
                    <Minus size={17} />
                  </button>

                  <span className="w-12 text-center font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={increaseQuantity}
                    className="flex h-full w-12 items-center justify-center text-gray-600 hover:text-indigo-600"
                  >
                    <Plus size={17} />
                  </button>

                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <button
                  onClick={handleAddToCart}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-indigo-600"
                >
                  <ShoppingBag size={19} />
                  Add to Cart
                </button>

                <button
                  onClick={() =>
                    toggleWishlist(product)
                  }
                  className={`flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold ${
                    wishlist
                      ? "border-red-200 bg-red-50 text-red-500"
                      : "border-gray-200 text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Heart
                    size={19}
                    fill={
                      wishlist
                        ? "currentColor"
                        : "none"
                    }
                  />

                  {wishlist
                    ? "Wishlisted"
                    : "Wishlist"}
                </button>
              </div>

              {/* Benefits */}
              <div className="mt-8 grid gap-3 border-t border-gray-100 pt-7 sm:grid-cols-3">

                <Benefit
                  icon={<Truck size={19} />}
                  title="Free Shipping"
                  text="On orders over $50"
                />

                <Benefit
                  icon={<ShieldCheck size={19} />}
                  title="Secure Payment"
                  text="100% protected"
                />

                <Benefit
                  icon={<RotateCcw size={19} />}
                  title="Easy Returns"
                  text="30 day returns"
                />

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-t border-gray-100 bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Customer Feedback
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Customer Reviews
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <Review
              name="Rahul Sharma"
              rating={5}
              text="Amazing product quality. The product looks premium and delivery was very fast."
            />

            <Review
              name="Priya Singh"
              rating={5}
              text="Really happy with the purchase. The quality is exactly what I expected."
            />

            <Review
              name="Aman Kumar"
              rating={4}
              text="Good product and excellent packaging. Would definitely recommend it."
            />

          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-8 flex items-end justify-between gap-4">

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                  You May Also Like
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                  Related Products
                </h2>
              </div>

              <Link
                to="/shop"
                className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
              >
                View All
              </Link>

            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {relatedProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              ))}

            </div>
          </div>
        </section>
      )}

    </main>
  );
};

const Benefit = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className="flex items-start gap-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
        {icon}
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-900">
          {title}
        </p>

        <p className="mt-1 text-[11px] text-gray-400">
          {text}
        </p>
      </div>

    </div>
  );
};

const Review = ({
  name,
  rating,
  text,
}) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">

      <div className="flex items-center justify-between">

        <h3 className="font-semibold text-gray-900">
          {name}
        </h3>

        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map(
            (_, index) => (
              <Star
                key={index}
                size={15}
                className={
                  index < rating
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-300"
                }
              />
            )
          )}
        </div>

      </div>

      <p className="mt-4 text-sm leading-6 text-gray-500">
        {text}
      </p>

    </div>
  );
};

export default ProductDetails;