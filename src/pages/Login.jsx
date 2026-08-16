import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, LogIn } from "lucide-react";
import { useAuth } from "../context/AuthContext";


const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const savedUser = JSON.parse(
            localStorage.getItem("shopease_user")
        );

        if (!savedUser) {
            setError("Account not found. Please register first.");
            return;
        }

        if (
            savedUser.email.toLowerCase() !==
            formData.email.toLowerCase() ||
            savedUser.password !== formData.password
        ) {
            setError("Invalid email or password.");
            return;
        }

        // Login successful
        login(savedUser);   

        // Enter website
        navigate("/");
    };

    return (
        <section className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-16">
            <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

                {/* Header */}
                <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
                        <LogIn
                            size={26}
                            className="text-indigo-600"
                        />
                    </div>

                    <h1 className="mt-5 text-3xl font-bold text-gray-900">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Login to your ShopEase account.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >
                    {/* Error */}
                    {error && (
                        <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                            {error}
                        </div>
                    )}

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Email Address
                        </label>

                        <div className="relative">
                            <Mail
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Password
                        </label>

                        <div className="relative">
                            <Lock
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-500"
                    >
                        <LogIn size={18} />
                        Login
                    </button>
                </form>

                {/* Register */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        Create Account
                    </Link>
                </p>

            </div>
        </section>
    );
};

export default Login;