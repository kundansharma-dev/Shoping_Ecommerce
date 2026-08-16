import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
    Search,
    Heart,
    ShoppingBag,
    User,
    Menu,
    X,
    LogOut,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    const { user, logout } = useAuth();
    const { cartCount } = useCart();
    const { wishlist } = useWishlist();

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLogout = () => {
        logout();
        closeMenu();
        navigate("/login");
    };

    const handleSearch = (e) => {
        e.preventDefault();

        const query = searchQuery.trim();

        if (query) {
            navigate(
                `/shop?search=${encodeURIComponent(query)}`
            );
        } else {
            navigate("/shop");
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex h-[76px] max-w-7xl items-center gap-6 px-6">

                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="shrink-0 text-2xl font-extrabold tracking-tight text-gray-900"
                >
                    Shop<span className="text-indigo-600">
                        Ease
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-7 lg:flex">
                    <Link
                        to="/"
                        className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
                    >
                        Home
                    </Link>

                    <Link
                        to="/shop"
                        className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
                    >
                        Shop
                    </Link>

                    <Link
                        to="/shop"
                        className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
                    >
                        Categories
                    </Link>

                    <Link
                        to="/shop"
                        className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
                    >
                        Deals
                    </Link>
                </nav>

                {/* Search */}
                <form
                    onSubmit={handleSearch}
                    className="ml-auto hidden h-11 max-w-md flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 md:flex"
                >
                    <Search
                        size={19}
                        className="shrink-0 text-gray-500"
                    />

                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) =>
                            setSearchQuery(e.target.value)
                        }
                        placeholder="Search products..."
                        className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                    />
                </form>

                {/* Actions */}
                <div className="flex items-center gap-1">

                    {/* Wishlist */}
                    <Link
                        to="/wishlist"
                        className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100 hover:text-indigo-600"
                        aria-label="Wishlist"
                    >
                        <Heart
                            size={21}
                            fill={
                                wishlist.length > 0
                                    ? "currentColor"
                                    : "none"
                            }
                        />

                        {wishlist.length > 0 && (
                            <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white">
                                {wishlist.length}
                            </span>
                        )}
                    </Link>

                    {/* Cart */}
                    <Link
                        to="/cart"
                        className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100 hover:text-indigo-600"
                        aria-label="Shopping cart"
                    >
                        <ShoppingBag size={21} />

                        {cartCount > 0 && (
                            <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {/* Account */}
                    {user ? (
                        <div className="hidden items-center gap-2 sm:flex">

                            <div className="flex h-10 items-center gap-2 rounded-xl bg-gray-50 px-3">
                                <User
                                    size={18}
                                    className="text-indigo-600"
                                />

                                <span className="max-w-[120px] truncate text-sm font-semibold text-gray-700">
                                    Hi, {user.firstName}
                                </span>
                            </div>

                            <button
                                onClick={handleLogout}
                                className="flex h-10 items-center gap-2 rounded-xl px-3 text-sm font-medium text-gray-600 transition hover:bg-red-50 hover:text-red-600"
                                aria-label="Logout"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>

                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="hidden h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100 hover:text-indigo-600 sm:flex"
                            aria-label="Account"
                        >
                            <User size={21} />
                        </Link>
                    )}

                    {/* Mobile Menu */}
                    <button
                        onClick={() =>
                            setMenuOpen(!menuOpen)
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100 lg:hidden"
                        aria-label="Menu"
                    >
                        {menuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="border-t border-gray-200 bg-white px-6 py-5 lg:hidden">

                    {/* Mobile User */}
                    {user && (
                        <div className="mb-4 rounded-xl bg-indigo-50 p-4">
                            <p className="text-xs font-medium text-gray-500">
                                Logged in as
                            </p>

                            <p className="mt-1 font-semibold text-gray-900">
                                {user.firstName}{" "}
                                {user.lastName}
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                {user.email}
                            </p>
                        </div>
                    )}

                    <nav className="flex flex-col gap-1">

                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            Home
                        </Link>

                        <Link
                            to="/shop"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            Shop
                        </Link>

                        <Link
                            to="/shop"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            Categories
                        </Link>

                        <Link
                            to="/shop"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            Deals
                        </Link>

                        <Link
                            to="/wishlist"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            Wishlist
                        </Link>

                        <Link
                            to="/cart"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                            Cart
                        </Link>

                        {user ? (
                            <button
                                onClick={handleLogout}
                                className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                onClick={closeMenu}
                                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                            >
                                Login
                            </Link>
                        )}

                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;