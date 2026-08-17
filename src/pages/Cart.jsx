import { Link } from "react-router-dom";
import {
    ArrowRight,
    Minus,
    Plus,
    ShoppingBag,
    Trash2,
} from "lucide-react";

import { useCart } from "../context/CartContext";

const Cart = () => {
    const {
        cart,
        cartTotal,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    if (cart.length === 0) {
        return (
            <section className="flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-gray-50 px-4 py-16 sm:px-6">
                <div className="w-full max-w-md text-center">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                        <ShoppingBag size={32} />
                    </div>

                    <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
                        Your Cart is Empty
                    </h1>

                    <p className="mt-3 text-sm text-gray-500 sm:text-base">
                        Looks like you haven't added anything to your cart yet.
                    </p>

                    <Link
                        to="/shop"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                    >
                        Start Shopping
                        <ArrowRight size={17} />
                    </Link>

                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen w-full overflow-x-hidden bg-gray-50 py-8 sm:py-12 lg:py-16">

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

                {/* Header */}
                <div className="mb-8 sm:mb-10">

                    <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 sm:text-sm">
                        Shopping Cart
                    </p>

                    <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-4xl">
                        Your Cart
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 sm:mt-3 sm:text-base">
                        Review your products before checkout.
                    </p>

                </div>

                <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-8">

                    {/* ================= PRODUCTS ================= */}
                    <div className="min-w-0 space-y-4">

                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="w-full min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 sm:p-5"
                            >

                                {/* Product */}
                                <div className="flex min-w-0 gap-3 sm:gap-6">

                                    {/* Image */}
                                    <Link
                                        to={`/product/${item.id}`}
                                        className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-32 sm:w-32"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </Link>

                                    {/* Info */}
                                    <div className="min-w-0 flex-1">

                                        <p className="truncate text-[10px] font-semibold uppercase tracking-wide text-indigo-600 sm:text-xs">
                                            {item.category}
                                        </p>

                                        <Link
                                            to={`/product/${item.id}`}
                                            className="mt-1 block truncate text-sm font-bold text-gray-900 hover:text-indigo-600 sm:text-lg"
                                        >
                                            {item.name}
                                        </Link>

                                        <p className="mt-1 text-base font-bold text-gray-900 sm:mt-2 sm:text-lg">
                                            ${item.price}
                                        </p>

                                        {/* Quantity + Remove */}
                                        <div className="mt-3 flex w-full items-center justify-between gap-2 sm:mt-4">

                                            {/* Quantity */}
                                            <div className="flex h-9 shrink-0 items-center rounded-lg border border-gray-200">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        decreaseQuantity(item.id)
                                                    }
                                                    className="flex h-full w-8 items-center justify-center text-gray-500 transition hover:text-indigo-600 sm:w-9"
                                                >
                                                    <Minus size={14} />
                                                </button>

                                                <span className="w-7 text-center text-sm font-semibold sm:w-8">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        increaseQuantity(item.id)
                                                    }
                                                    className="flex h-full w-8 items-center justify-center text-gray-500 transition hover:text-indigo-600 sm:w-9"
                                                >
                                                    <Plus size={14} />
                                                </button>

                                            </div>

                                            {/* Remove */}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                                className="flex shrink-0 items-center gap-1 text-xs font-medium text-gray-400 transition hover:text-red-500 sm:gap-1.5 sm:text-sm"
                                            >
                                                <Trash2 size={15} />

                                                <span className="hidden xs:inline sm:inline">
                                                    Remove
                                                </span>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* ================= SUMMARY ================= */}
                    <div className="h-fit w-full min-w-0 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">

                        <h2 className="text-lg font-bold text-gray-900">
                            Order Summary
                        </h2>

                        <div className="mt-5 space-y-4 text-sm">

                            <div className="flex items-center justify-between gap-4">
                                <span className="text-gray-500">
                                    Subtotal
                                </span>

                                <span className="font-semibold text-gray-900">
                                    ${cartTotal.toFixed(2)}
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <span className="text-gray-500">
                                    Shipping
                                </span>

                                <span className="font-semibold text-green-600">
                                    Free
                                </span>
                            </div>

                            <div className="border-t border-gray-100 pt-4">

                                <div className="flex items-center justify-between gap-4">
                                    <span className="font-bold text-gray-900">
                                        Total
                                    </span>

                                    <span className="text-xl font-bold text-gray-900">
                                        ${cartTotal.toFixed(2)}
                                    </span>
                                </div>

                            </div>
                        </div>

                        <Link
                            to="/checkout"
                            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-indigo-500"
                        >
                            <span>Proceed to Checkout</span>
                            <ArrowRight size={17} />
                        </Link>

                        <Link
                            to="/shop"
                            className="mt-3 block text-center text-sm font-semibold text-gray-500 hover:text-indigo-600"
                        >
                            Continue Shopping
                        </Link>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cart;