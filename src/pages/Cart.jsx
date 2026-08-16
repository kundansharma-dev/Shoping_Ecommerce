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
            <section className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-6 py-16">
                <div className="text-center">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                        <ShoppingBag size={32} />
                    </div>

                    <h1 className="mt-6 text-3xl font-bold text-gray-900">
                        Your Cart is Empty
                    </h1>

                    <p className="mt-3 text-gray-500">
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
        <section className="min-h-screen bg-gray-50 py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                        Shopping Cart
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Your Cart
                    </h1>

                    <p className="mt-3 text-gray-500">
                        Review your products before checkout.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_350px]">

                    {/* Products */}
                    <div className="space-y-4">

                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5"
                            >
                                <div className="flex gap-4 sm:gap-6">

                                    {/* Image */}
                                    <Link
                                        to={`/product/${item.id}`}
                                        className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-32 sm:w-32"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </Link>

                                    {/* Info */}
                                    <div className="min-w-0 flex-1">

                                        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                                            {item.category}
                                        </p>

                                        <Link
                                            to={`/product/${item.id}`}
                                            className="mt-1 block truncate text-base font-bold text-gray-900 hover:text-indigo-600 sm:text-lg"
                                        >
                                            {item.name}
                                        </Link>

                                        <p className="mt-2 text-lg font-bold text-gray-900">
                                            ${item.price}
                                        </p>

                                        {/* Quantity */}
                                        <div className="mt-4 flex items-center justify-between gap-4">

                                            <div className="flex h-9 items-center rounded-lg border border-gray-200">

                                                <button
                                                    onClick={() =>
                                                        decreaseQuantity(item.id)
                                                    }
                                                    className="flex h-full w-9 items-center justify-center text-gray-500 hover:text-indigo-600"
                                                >
                                                    <Minus size={15} />
                                                </button>

                                                <span className="w-8 text-center text-sm font-semibold">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        increaseQuantity(item.id)
                                                    }
                                                    className="flex h-full w-9 items-center justify-center text-gray-500 hover:text-indigo-600"
                                                >
                                                    <Plus size={15} />
                                                </button>

                                            </div>

                                            <button
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                                className="flex items-center gap-1.5 text-sm font-medium text-gray-400 transition hover:text-red-500"
                                            >
                                                <Trash2 size={16} />
                                                <span className="hidden sm:inline">
                                                    Remove
                                                </span>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Summary */}
                    <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6">

                        <h2 className="text-lg font-bold text-gray-900">
                            Order Summary
                        </h2>

                        <div className="mt-6 space-y-4 text-sm">

                            <div className="flex justify-between">
                                <span className="text-gray-500">
                                    Subtotal
                                </span>

                                <span className="font-semibold text-gray-900">
                                    ${cartTotal.toFixed(2)}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">
                                    Shipping
                                </span>

                                <span className="font-semibold text-green-600">
                                    Free
                                </span>
                            </div>

                            <div className="border-t border-gray-100 pt-4">
                                <div className="flex justify-between">
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
                            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                        >
                            Proceed to Checkout
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