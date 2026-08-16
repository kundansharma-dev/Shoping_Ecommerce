import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    Lock,
    CreditCard,
    Truck,
} from "lucide-react";

import { useCart } from "../context/CartContext";

const Checkout = () => {
    const navigate = useNavigate();

    const { cart, cartTotal, clearCart } = useCart();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
    });

    const [paymentMethod, setPaymentMethod] =
        useState("card");

    const shipping = cartTotal >= 50 ? 0 : 5.99;

    const tax = cartTotal * 0.08;

    const total = cartTotal + shipping + tax;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const orderId = `SE-${Math.floor(
            100000 + Math.random() * 900000
        )}`;

        console.log("Cart Total:", cartTotal);
        console.log("Shipping:", shipping);
        console.log("Tax:", tax);
        console.log("Final Total:", total);

        navigate("/order-success", {
            state: {
                order: {
                    orderId: orderId,
                    total: total,
                },
            },
        });

        clearCart();
    };
    /* Empty Cart */
    if (cart.length === 0) {
        return (
            <section className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-6">
                <div className="text-center">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50">
                        <CreditCard
                            size={32}
                            className="text-indigo-600"
                        />
                    </div>

                    <h1 className="mt-6 text-3xl font-bold text-gray-900">
                        Your Cart is Empty
                    </h1>

                    <p className="mt-3 text-gray-500">
                        Add some products before proceeding to
                        checkout.
                    </p>

                    <Link
                        to="/shop"
                        className="mt-7 inline-flex rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-indigo-500"
                    >
                        Continue Shopping
                    </Link>

                </div>
            </section>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50">

            {/* Header */}
            <div className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-7xl px-6 py-5">

                    <Link
                        to="/cart"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-600"
                    >
                        <ArrowLeft size={17} />
                        Back to Cart
                    </Link>

                </div>
            </div>

            {/* Checkout */}
            <section className="py-10 sm:py-14">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-10">
                        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                            Secure Checkout
                        </p>

                        <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                            Complete Your Order
                        </h1>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="grid gap-8 lg:grid-cols-[1fr_400px]"
                    >

                        {/* Left */}
                        <div className="space-y-6">

                            {/* Contact */}
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">

                                <h2 className="text-xl font-bold text-gray-900">
                                    Contact Information
                                </h2>

                                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                                    <Input
                                        label="First Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />

                                    <Input
                                        label="Last Name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />

                                    <Input
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                    <Input
                                        label="Phone Number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>
                            </div>

                            {/* Shipping */}
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">

                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                        <Truck size={20} />
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">
                                            Shipping Address
                                        </h2>

                                        <p className="text-sm text-gray-500">
                                            Where should we deliver your order?
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-4">

                                    <Input
                                        label="Street Address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                    />

                                    <div className="grid gap-4 sm:grid-cols-3">

                                        <Input
                                            label="City"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                        />

                                        <Input
                                            label="State"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            required
                                        />

                                        <Input
                                            label="ZIP Code"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>
                            </div>

                            {/* Payment */}
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">

                                <h2 className="text-xl font-bold text-gray-900">
                                    Payment Method
                                </h2>

                                <div className="mt-6 space-y-3">

                                    {/* Card */}
                                    <label
                                        className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${paymentMethod === "card"
                                            ? "border-indigo-500 bg-indigo-50"
                                            : "border-gray-200"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="card"
                                            checked={
                                                paymentMethod === "card"
                                            }
                                            onChange={(e) =>
                                                setPaymentMethod(
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <CreditCard size={20} />

                                        <div>
                                            <p className="font-semibold text-gray-900">
                                                Credit / Debit Card
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                Secure card payment
                                            </p>
                                        </div>
                                    </label>

                                    {/* COD */}
                                    <label
                                        className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${paymentMethod === "cod"
                                            ? "border-indigo-500 bg-indigo-50"
                                            : "border-gray-200"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={
                                                paymentMethod === "cod"
                                            }
                                            onChange={(e) =>
                                                setPaymentMethod(
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <Truck size={20} />

                                        <div>
                                            <p className="font-semibold text-gray-900">
                                                Cash on Delivery
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                Pay when your order arrives
                                            </p>
                                        </div>
                                    </label>

                                </div>

                                {/* Card Details */}
                                {paymentMethod === "card" && (
                                    <div className="mt-6 grid gap-4">

                                        <Input
                                            label="Card Number"
                                            placeholder="1234 5678 9012 3456"
                                            required
                                        />

                                        <div className="grid grid-cols-2 gap-4">

                                            <Input
                                                label="Expiry Date"
                                                placeholder="MM / YY"
                                                required
                                            />

                                            <Input
                                                label="CVV"
                                                placeholder="123"
                                                required
                                            />

                                        </div>

                                    </div>
                                )}

                            </div>

                        </div>

                        {/* Right */}
                        <div>

                            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6">

                                <h2 className="text-xl font-bold text-gray-900">
                                    Order Summary
                                </h2>

                                {/* Products */}
                                <div className="mt-6 space-y-4">

                                    {cart.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex gap-3"
                                        >

                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-16 w-16 rounded-xl object-cover"
                                            />

                                            <div className="min-w-0 flex-1">

                                                <p className="truncate text-sm font-semibold text-gray-900">
                                                    {item.name}
                                                </p>

                                                <p className="mt-1 text-xs text-gray-500">
                                                    Qty: {item.quantity}
                                                </p>

                                                <p className="mt-1 text-sm font-bold text-gray-900">
                                                    $
                                                    {(
                                                        item.price *
                                                        item.quantity
                                                    ).toFixed(2)}
                                                </p>

                                            </div>

                                        </div>
                                    ))}

                                </div>

                                <div className="my-6 border-t border-gray-200" />

                                {/* Prices */}
                                <div className="space-y-3 text-sm">

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">
                                            Subtotal
                                        </span>

                                        <span className="font-medium text-gray-900">
                                            ${cartTotal.toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">
                                            Shipping
                                        </span>

                                        <span className="font-medium text-gray-900">
                                            {shipping === 0
                                                ? "FREE"
                                                : `$${shipping.toFixed(2)}`}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">
                                            Tax
                                        </span>

                                        <span className="font-medium text-gray-900">
                                            ${tax.toFixed(2)}
                                        </span>
                                    </div>

                                </div>

                                <div className="my-6 border-t border-gray-200" />

                                <div className="flex items-center justify-between">

                                    <span className="text-lg font-bold text-gray-900">
                                        Total
                                    </span>

                                    <span className="text-2xl font-bold text-indigo-600">
                                        ${total.toFixed(2)}
                                    </span>

                                </div>

                                {/* Place Order */}
                                <button
                                    type="submit"
                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-4 text-sm font-bold text-white hover:bg-indigo-600"
                                >
                                    <Lock size={17} />
                                    Place Order
                                </button>

                                <p className="mt-4 text-center text-xs text-gray-400">
                                    Your payment information is secure
                                    and encrypted.
                                </p>

                            </div>

                        </div>

                    </form>
                </div>
            </section>
        </main>
    );
};

const Input = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    required = false,
}) => {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
        </div>
    );
};

export default Checkout;