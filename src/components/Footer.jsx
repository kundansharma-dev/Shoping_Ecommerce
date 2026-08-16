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
        <footer className="bg-gray-950 text-gray-400">

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-6 py-16">

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">

                    {/* Brand */}
                    <div className="lg:col-span-2">

                        <a
                            href="/"
                            className="text-2xl font-extrabold tracking-tight text-white"
                        >
                            Shop<span className="text-indigo-500">Ease</span>
                        </a>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
                            Your modern destination for fashion, electronics,
                            accessories and everyday essentials.
                        </p>

                        {/* Social */}
                        <div className="mt-6 flex gap-3">
                            <SocialIcon>
                                <FaFacebookF size={16} />
                            </SocialIcon>

                            <SocialIcon>
                                <FaInstagram size={16} />
                            </SocialIcon>

                            <SocialIcon>
                                <FaTwitter size={16} />
                            </SocialIcon>

                            <SocialIcon>
                                <FaYoutube size={16} />
                            </SocialIcon>
                        </div>
                    </div>

                    {/* Shop */}
                    <FooterColumn
                        title="Shop"
                        links={[
                            "All Products",
                            "New Arrivals",
                            "Best Sellers",
                            "Deals",
                        ]}
                    />

                    {/* Company */}
                    <FooterColumn
                        title="Company"
                        links={[
                            "About Us",
                            "Contact",
                            "Careers",
                            "Privacy Policy",
                        ]}
                    />

                    {/* Support */}
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

            {/* Bottom */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm sm:flex-row">

                    <p className="text-gray-600">
                        © 2026 ShopEase. All rights reserved.
                    </p>

                    <button
                        onClick={handleScrollTop}
                        className="group flex items-center gap-2 text-gray-500 transition hover:text-white"
                    >
                        Back to top

                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 transition group-hover:border-white/20 group-hover:bg-white/5">
                            <ArrowUp size={15} />
                        </span>
                    </button>

                </div>
            </div>

        </footer>
    );
};

const FooterColumn = ({ title, links }) => {
    return (
        <div>
            <h3 className="text-sm font-semibold text-white">
                {title}
            </h3>

            <ul className="mt-5 space-y-3">
                {links.map((link) => (
                    <li key={link}>
                        <a
                            href="/"
                            className="text-sm text-gray-500 transition hover:text-indigo-400"
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const SocialIcon = ({ children }) => {
    return (
        <a
            href="/"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400"
        >
            {children}
        </a>
    );
};

export default Footer;