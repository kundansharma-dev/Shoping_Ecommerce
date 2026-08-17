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
            navigate(`/shop?search=${encodeURIComponent(query)}`);
        } else {
            navigate("/shop");
        }

        closeMenu();
    };

    return (
        <header
            className="
                glass-navbar
                sticky top-0 z-50
                w-full
            "
        >
            {/* =========================================
                MAIN NAVBAR
            ========================================== */}

            <div
                className="
                    mx-auto
                    flex
                    min-h-[72px]
                    w-full
                    max-w-7xl
                    items-center
                    gap-2
                    px-4
                    sm:min-h-[76px]
                    sm:gap-4
                    sm:px-6
                    lg:gap-6
                "
            >

                {/* ================= LOGO ================= */}

                <Link
                    to="/"
                    onClick={closeMenu}
                    className="
                        shrink-0
                        text-xl
                        font-extrabold
                        tracking-tight
                        text-gray-900
                        transition
                        duration-300
                        hover:scale-[1.02]
                        sm:text-2xl
                    "
                >
                    Shop
                    <span className="text-indigo-600">
                        Ease
                    </span>
                </Link>


                {/* ================= DESKTOP NAV ================= */}

                <nav className="hidden items-center gap-5 lg:flex xl:gap-7">

                    <Link
                        to="/"
                        className="
                            relative
                            text-sm
                            font-semibold
                            text-gray-700
                            transition
                            hover:text-indigo-600
                            after:absolute
                            after:-bottom-1
                            after:left-0
                            after:h-[2px]
                            after:w-0
                            after:bg-indigo-600
                            after:transition-all
                            hover:after:w-full
                        "
                    >
                        Home
                    </Link>

                    <Link
                        to="/shop"
                        className="
                            relative
                            text-sm
                            font-semibold
                            text-gray-700
                            transition
                            hover:text-indigo-600
                            after:absolute
                            after:-bottom-1
                            after:left-0
                            after:h-[2px]
                            after:w-0
                            after:bg-indigo-600
                            after:transition-all
                            hover:after:w-full
                        "
                    >
                        Shop
                    </Link>

                    <Link
                        to="/shop"
                        className="
                            relative
                            text-sm
                            font-semibold
                            text-gray-700
                            transition
                            hover:text-indigo-600
                            after:absolute
                            after:-bottom-1
                            after:left-0
                            after:h-[2px]
                            after:w-0
                            after:bg-indigo-600
                            after:transition-all
                            hover:after:w-full
                        "
                    >
                        Categories
                    </Link>

                    <Link
                        to="/shop"
                        className="
                            relative
                            text-sm
                            font-semibold
                            text-gray-700
                            transition
                            hover:text-indigo-600
                            after:absolute
                            after:-bottom-1
                            after:left-0
                            after:h-[2px]
                            after:w-0
                            after:bg-indigo-600
                            after:transition-all
                            hover:after:w-full
                        "
                    >
                        Deals
                    </Link>

                </nav>


                {/* ================= DESKTOP SEARCH ================= */}

                <form
                    onSubmit={handleSearch}
                    className="
                        glass-input
                        ml-auto
                        hidden
                        h-11
                        min-w-0
                        max-w-md
                        flex-1
                        items-center
                        gap-3
                        rounded-2xl
                        px-4
                        md:flex
                    "
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
                        className="
                            min-w-0
                            w-full
                            bg-transparent
                            text-sm
                            text-gray-900
                            outline-none
                            placeholder:text-gray-400
                        "
                    />
                </form>


                {/* ================= ACTIONS ================= */}

                <div
                    className="
                        ml-auto
                        flex
                        shrink-0
                        items-center
                        gap-1
                        sm:gap-2
                        lg:ml-0
                    "
                >

                    {/* Wishlist */}

                    <Link
                        to="/wishlist"
                        className="
                            glass-icon
                            relative
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            text-gray-700
                        "
                        aria-label="Wishlist"
                    >
                        <Heart
                            size={20}
                            fill={
                                wishlist.length > 0
                                    ? "currentColor"
                                    : "none"
                            }
                        />

                        {wishlist.length > 0 && (
                            <span
                                className="
                                    glass-badge
                                    absolute
                                    -right-1
                                    -top-1
                                    flex
                                    h-4
                                    min-w-4
                                    items-center
                                    justify-center
                                    rounded-full
                                    px-1
                                    text-[10px]
                                    font-bold
                                    text-white
                                "
                            >
                                {wishlist.length}
                            </span>
                        )}
                    </Link>


                    {/* Cart */}

                    <Link
                        to="/cart"
                        className="
                            glass-icon
                            relative
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            text-gray-700
                        "
                        aria-label="Shopping cart"
                    >
                        <ShoppingBag size={20} />

                        {cartCount > 0 && (
                            <span
                                className="
                                    glass-badge
                                    absolute
                                    -right-1
                                    -top-1
                                    flex
                                    h-4
                                    min-w-4
                                    items-center
                                    justify-center
                                    rounded-full
                                    px-1
                                    text-[10px]
                                    font-bold
                                    text-white
                                "
                            >
                                {cartCount}
                            </span>
                        )}
                    </Link>


                    {/* ================= DESKTOP USER ================= */}

                    {user ? (
                        <div className="hidden items-center gap-2 sm:flex">

                            <div
                                className="
                                    glass
                                    flex
                                    h-10
                                    max-w-[150px]
                                    items-center
                                    gap-2
                                    rounded-xl
                                    px-3
                                "
                            >
                                <User
                                    size={18}
                                    className="
                                        shrink-0
                                        text-indigo-600
                                    "
                                />

                                <span
                                    className="
                                        truncate
                                        text-sm
                                        font-semibold
                                        text-gray-700
                                    "
                                >
                                    Hi, {user.firstName}
                                </span>
                            </div>


                            <button
                                type="button"
                                onClick={handleLogout}
                                className="
                                    glass-icon
                                    flex
                                    h-10
                                    items-center
                                    gap-2
                                    rounded-xl
                                    px-3
                                    text-sm
                                    font-medium
                                    text-gray-600
                                    hover:text-red-600
                                "
                            >
                                <LogOut size={18} />

                                <span className="hidden md:inline">
                                    Logout
                                </span>
                            </button>

                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="
                                glass-icon
                                hidden
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                text-gray-700
                                sm:flex
                            "
                            aria-label="Account"
                        >
                            <User size={20} />
                        </Link>
                    )}


                    {/* ================= MOBILE MENU BUTTON ================= */}

                    <button
                        type="button"
                        onClick={() =>
                            setMenuOpen((prev) => !prev)
                        }
                        className="
                            glass-icon
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            text-gray-700
                            lg:hidden
                        "
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            <X size={23} />
                        ) : (
                            <Menu size={23} />
                        )}
                    </button>

                </div>
            </div>


            {/* =========================================
                MOBILE MENU
            ========================================== */}

            {menuOpen && (
                <div
                    className="
                        glass
                        mx-3
                        mb-3
                        overflow-hidden
                        rounded-2xl
                        p-4
                        lg:hidden
                    "
                >

                    {/* Mobile Search */}

                    <form
                        onSubmit={handleSearch}
                        className="
                            glass-input
                            mb-4
                            flex
                            h-11
                            w-full
                            items-center
                            gap-3
                            rounded-xl
                            px-4
                        "
                    >
                        <Search
                            size={18}
                            className="shrink-0 text-gray-500"
                        />

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) =>
                                setSearchQuery(e.target.value)
                            }
                            placeholder="Search products..."
                            className="
                                min-w-0
                                w-full
                                bg-transparent
                                text-sm
                                text-gray-900
                                outline-none
                                placeholder:text-gray-400
                            "
                        />
                    </form>


                    {/* Mobile User */}

                    {user && (
                        <div
                            className="
                                glass
                                mb-4
                                rounded-xl
                                p-4
                            "
                        >
                            <div className="flex min-w-0 items-center gap-3">

                                <div
                                    className="
                                        glass-icon
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                    "
                                >
                                    <User
                                        size={19}
                                        className="text-indigo-600"
                                    />
                                </div>

                                <div className="min-w-0">

                                    <p className="truncate font-semibold text-gray-900">
                                        {user.firstName}{" "}
                                        {user.lastName}
                                    </p>

                                    <p className="truncate text-xs text-gray-500">
                                        {user.email}
                                    </p>

                                </div>

                            </div>
                        </div>
                    )}


                    {/* Mobile Navigation */}

                    <nav className="flex flex-col gap-1">

                        <Link
                            to="/"
                            onClick={closeMenu}
                            className="
                                rounded-xl
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-gray-700
                                transition
                                hover:bg-white/50
                                hover:text-indigo-600
                            "
                        >
                            Home
                        </Link>

                        <Link
                            to="/shop"
                            onClick={closeMenu}
                            className="
                                rounded-xl
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-gray-700
                                transition
                                hover:bg-white/50
                                hover:text-indigo-600
                            "
                        >
                            Shop
                        </Link>

                        <Link
                            to="/shop"
                            onClick={closeMenu}
                            className="
                                rounded-xl
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-gray-700
                                transition
                                hover:bg-white/50
                                hover:text-indigo-600
                            "
                        >
                            Categories
                        </Link>

                        <Link
                            to="/shop"
                            onClick={closeMenu}
                            className="
                                rounded-xl
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-gray-700
                                transition
                                hover:bg-white/50
                                hover:text-indigo-600
                            "
                        >
                            Deals
                        </Link>

                        <Link
                            to="/wishlist"
                            onClick={closeMenu}
                            className="
                                flex
                                items-center
                                justify-between
                                rounded-xl
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-gray-700
                                transition
                                hover:bg-white/50
                                hover:text-indigo-600
                            "
                        >
                            <span>Wishlist</span>

                            {wishlist.length > 0 && (
                                <span className="glass-badge rounded-full px-2 py-0.5 text-xs font-bold text-white">
                                    {wishlist.length}
                                </span>
                            )}
                        </Link>

                        <Link
                            to="/cart"
                            onClick={closeMenu}
                            className="
                                flex
                                items-center
                                justify-between
                                rounded-xl
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-gray-700
                                transition
                                hover:bg-white/50
                                hover:text-indigo-600
                            "
                        >
                            <span>Cart</span>

                            {cartCount > 0 && (
                                <span className="glass-badge rounded-full px-2 py-0.5 text-xs font-bold text-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>


                        {/* Login / Logout */}

                        {user ? (
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="
                                    mt-2
                                    flex
                                    w-full
                                    items-center
                                    gap-2
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-left
                                    text-sm
                                    font-semibold
                                    text-red-600
                                    transition
                                    hover:bg-red-50/70
                                "
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                onClick={closeMenu}
                                className="
                                    glass-button
                                    mt-2
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-white
                                "
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