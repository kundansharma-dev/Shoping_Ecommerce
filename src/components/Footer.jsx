import {
    ArrowUp,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer
            className="
                relative
                mt-16
                overflow-hidden
                border-t
                border-white/10
                bg-gray-950/90
                text-gray-400
                backdrop-blur-2xl
            "
        >

            {/* Background Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-32
                    top-10
                    h-64
                    w-64
                    rounded-full
                    bg-indigo-600/10
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    bottom-0
                    h-72
                    w-72
                    rounded-full
                    bg-purple-600/10
                    blur-3xl
                "
            />


            {/* ================= MAIN FOOTER ================= */}

            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    py-12
                    sm:px-6
                    sm:py-16
                "
            >

                <div
                    className="
                        grid
                        gap-10
                        sm:grid-cols-2
                        sm:gap-12
                        lg:grid-cols-5
                    "
                >

                    {/* ================= BRAND ================= */}

                    <div className="lg:col-span-2">

                        <a
                            href="/"
                            className="
                                text-2xl
                                font-extrabold
                                tracking-tight
                                text-white
                                transition
                                hover:text-indigo-400
                            "
                        >
                            Shop
                            <span className="text-indigo-500">
                                Ease
                            </span>
                        </a>


                        <p
                            className="
                                mt-5
                                max-w-sm
                                text-sm
                                leading-7
                                text-gray-400
                            "
                        >
                            Your modern destination for fashion,
                            electronics, accessories and everyday
                            essentials.
                        </p>


                        {/* ================= SOCIAL ================= */}

                        <div className="mt-6 flex flex-wrap gap-3">

                            <SocialIcon>
                                <FaFacebookF size={15} />
                            </SocialIcon>

                            <SocialIcon>
                                <FaInstagram size={15} />
                            </SocialIcon>

                            <SocialIcon>
                                <FaTwitter size={15} />
                            </SocialIcon>

                            <SocialIcon>
                                <FaYoutube size={15} />
                            </SocialIcon>

                        </div>

                    </div>


                    {/* ================= SHOP ================= */}

                    <FooterColumn
                        title="Shop"
                        links={[
                            "All Products",
                            "New Arrivals",
                            "Best Sellers",
                            "Deals",
                        ]}
                    />


                    {/* ================= COMPANY ================= */}

                    <FooterColumn
                        title="Company"
                        links={[
                            "About Us",
                            "Contact",
                            "Careers",
                            "Privacy Policy",
                        ]}
                    />


                    {/* ================= SUPPORT ================= */}

                    <FooterColumn
                        title="Support"
                        links={[
                            "Help Center",
                            "Shipping",
                            "Returns",
                            "FAQs",
                        ]}
                    />

                </div>

            </div>


            {/* ================= BOTTOM ================= */}

            <div className="relative border-t border-white/10">

                <div
                    className="
                        mx-auto
                        flex
                        w-full
                        max-w-7xl
                        flex-col
                        items-center
                        justify-between
                        gap-4
                        px-4
                        py-5
                        text-center
                        sm:flex-row
                        sm:px-6
                        sm:text-left
                    "
                >

                    <p className="text-xs text-gray-500 sm:text-sm">
                        © 2026 ShopEase. All rights reserved.
                    </p>


                    {/* Back To Top */}

                    <button
                        type="button"
                        onClick={handleScrollTop}
                        className="
                            group
                            flex
                            items-center
                            gap-2
                            text-xs
                            font-medium
                            text-gray-500
                            transition
                            hover:text-white
                            sm:text-sm
                        "
                    >
                        Back to top

                        <span
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                transition
                                group-hover:border-indigo-400/40
                                group-hover:bg-indigo-500/10
                                group-hover:text-indigo-400
                            "
                        >
                            <ArrowUp size={15} />
                        </span>

                    </button>

                </div>

            </div>

        </footer>
    );
};


/* =========================================
   FOOTER COLUMN
========================================= */

const FooterColumn = ({ title, links }) => {

    return (
        <div>

            <h3
                className="
                    text-sm
                    font-semibold
                    tracking-wide
                    text-white
                "
            >
                {title}
            </h3>


            <ul className="mt-5 space-y-3">

                {links.map((link) => (
                    <li key={link}>

                        <a
                            href="/"
                            className="
                                text-sm
                                text-gray-500
                                transition
                                hover:text-indigo-400
                            "
                        >
                            {link}
                        </a>

                    </li>
                ))}

            </ul>

        </div>
    );
};


/* =========================================
   SOCIAL ICON
========================================= */

const SocialIcon = ({ children }) => {

    return (
        <a
            href="/"
            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/5
                text-gray-400
                backdrop-blur-xl
                transition
                duration-300
                hover:-translate-y-1
                hover:border-indigo-400/40
                hover:bg-indigo-500/10
                hover:text-indigo-400
            "
        >
            {children}
        </a>
    );
};

export default Footer;