import { Link, useLocation } from "react-router-dom";
import {
    CheckCircle2,
    ShoppingBag,
    ArrowRight,
} from "lucide-react";

const OrderSuccess = () => {
    const location = useLocation();

    const order = location.state?.order;
    const orderId = order?.orderId;
    const total = order?.total;


    return (
        <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-6 py-16">
            <div className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">

                {/* Success Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle2
                        size={44}
                        className="text-green-500"
                    />
                </div>

                {/* Heading */}
                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-green-600">
                    Order Confirmed
                </p>

                <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                    Thank You For Your Order!
                </h1>

                <p className="mx-auto mt-4 max-w-lg text-gray-500">
                    Your order has been successfully placed.
                    We will send you an email with your order
                    details and tracking information.
                </p>

                {/* Order Details */}
                <div className="mt-8 rounded-2xl bg-gray-50 p-6 text-left">

                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                        <span className="text-sm text-gray-500">
                            Order ID
                        </span>

                        <span className="font-semibold text-gray-900">
                            #{orderId}
                        </span>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <span className="text-sm text-gray-500">
                            Total Amount
                        </span>

                        <span className="text-lg font-bold text-indigo-600">
                            ${Number(total).toFixed(2)}
                        </span>
                    </div>

                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                    <Link
                        to="/shop"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
                    >
                        <ShoppingBag size={18} />
                        Continue Shopping
                    </Link>

                    <Link
                        to="/"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-indigo-300 hover:text-indigo-600"
                    >
                        Back to Home
                        <ArrowRight size={17} />
                    </Link>

                </div>

            </div>
        </main>
    );
};

export default OrderSuccess;