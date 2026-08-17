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
        <article
            className="
                glass-card
                group
                w-full
                min-w-0
                overflow-hidden
                rounded-3xl
            "
        >

            {/* ================= IMAGE ================= */}

            <div
                className="
                    relative
                    aspect-square
                    w-full
                    overflow-hidden
                    rounded-t-3xl
                    bg-gray-100/40
                "
            >

                <Link
                    to={`/product/${product.id}`}
                    className="block h-full w-full"
                >

                    {/* Discount */}

                    {discount > 0 && (
                        <span
                            className="
                                glass-badge
                                absolute
                                left-3
                                top-3
                                z-10
                                rounded-full
                                px-3
                                py-1
                                text-[11px]
                                font-bold
                                text-white
                                sm:text-xs
                            "
                        >
                            -{discount}%
                        </span>
                    )}

                    <img
                        src={product.image}
                        alt={product.name}
                        className="
                            h-full
                            w-full
                            object-cover
                            transition
                            duration-500
                            ease-out
                            group-hover:scale-105
                        "
                    />

                </Link>


                {/* ================= WISHLIST ================= */}

                <button
                    type="button"
                    onClick={handleWishlist}
                    className={`
                        glass-icon
                        absolute
                        right-3
                        top-3
                        z-20
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        transition
                        ${
                            wishlist
                                ? "text-red-500"
                                : "text-gray-600 hover:text-red-500"
                        }
                    `}
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


            {/* ================= CONTENT ================= */}

            <div className="min-w-0 p-4 sm:p-5">

                {/* Category */}

                <p
                    className="
                        truncate
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-widest
                        text-indigo-500
                        sm:text-xs
                    "
                >
                    {product.category}
                </p>


                {/* Product Name */}

                <Link
                    to={`/product/${product.id}`}
                    className="
                        mt-1
                        block
                        truncate
                        text-sm
                        font-bold
                        text-gray-900
                        transition
                        hover:text-indigo-600
                        sm:text-base
                    "
                >
                    {product.name}
                </Link>


                {/* ================= RATING ================= */}

                <div className="mt-2 flex items-center gap-1">

                    <Star
                        size={14}
                        className="fill-amber-400 text-amber-400"
                    />

                    <span className="text-xs font-semibold text-gray-700 sm:text-sm">
                        {product.rating}
                    </span>

                    <span className="text-[11px] text-gray-400 sm:text-xs">
                        ({product.reviews})
                    </span>

                </div>


                {/* ================= PRICE + CART ================= */}

                <div
                    className="
                        mt-4
                        flex
                        min-w-0
                        items-center
                        justify-between
                        gap-2
                    "
                >

                    {/* Price */}

                    <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">

                        <span
                            className="
                                truncate
                                text-base
                                font-extrabold
                                text-gray-900
                                sm:text-lg
                            "
                        >
                            ${product.price}
                        </span>

                        {product.oldPrice && (
                            <span
                                className="
                                    shrink-0
                                    text-xs
                                    text-gray-400
                                    line-through
                                    sm:text-sm
                                "
                            >
                                ${product.oldPrice}
                            </span>
                        )}

                    </div>


                    {/* Add To Cart */}

                    <button
                        type="button"
                        onClick={handleAddToCart}
                        className="
                            glass-button
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            text-white
                        "
                        aria-label="Add to cart"
                    >
                        <ShoppingBag size={18} />
                    </button>

                </div>

            </div>
        </article>
    );
};

export default ProductCard;