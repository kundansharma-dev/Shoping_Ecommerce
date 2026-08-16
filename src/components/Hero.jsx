import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    ShoppingBag,
} from "lucide-react";

const slides = [
    {
        id: 1,
        badge: "New Collection",
        title: "Style That",
        highlight: "Speaks For You.",
        description:
            "Discover premium fashion, modern essentials and everyday styles made for you.",
        button: "Shop Collection",
        image:
            "https://images.unsplash.com/photo-1713256683892-5bab22f76be0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        badge: "Big Summer Sale",
        title: "Upgrade Your",
        highlight: "Everyday Style.",
        description:
            "Fresh looks, premium quality and amazing deals. Find your next favorite product.",
        button: "Shop Deals",
        image:
            "https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        badge: "Trending Now",
        title: "Your New",
        highlight: "Favorite Look.",
        description:
            "Explore trending products carefully selected to elevate your lifestyle.",
        button: "Explore Now",
        image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85",
    },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = () => {
        setCurrentSlide(
            (prev) => (prev + 1) % slides.length
        );
    };

    const previousSlide = () => {
        setCurrentSlide(
            (prev) =>
                (prev - 1 + slides.length) %
                slides.length
        );
    };

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            nextSlide();
        }, 2000);

        return () => clearInterval(timer);
    }, [isPaused]);

    const slide = slides[currentSlide];

    return (
        <section
            className="relative overflow-hidden bg-gray-950"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                {slides.map((item, index) => (
                    <div
                        key={item.id}
                        className={`absolute inset-0 transition-all duration-1000 ${
                            index === currentSlide
                                ? "scale-100 opacity-100"
                                : "scale-110 opacity-0"
                        }`}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
            </div>

            {/* Content */}
            <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 sm:min-h-[680px] lg:px-8">

                <div
                    key={slide.id}
                    className="max-w-2xl text-white"
                >
                    {/* Badge */}
                    <div className="animate-[fadeUp_.7s_ease-out]">
                        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                            {slide.badge}
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                        {slide.title}
                        <br />
                        <span className="text-indigo-400">
                            {slide.highlight}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-7 text-gray-200 sm:text-lg">
                        {slide.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                        <Link
                            to="/shop"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-600/30"
                        >
                            <ShoppingBag size={18} />

                            {slide.button}

                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            to="/shop"
                            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900"
                        >
                            View Products
                        </Link>

                    </div>

                    {/* Slide Number */}
                    <div className="mt-10 flex items-center gap-4">

                        <span className="text-sm font-bold">
                            0{currentSlide + 1}
                        </span>

                        <div className="h-px w-20 bg-white/30">
                            <div
                                className="h-full bg-white transition-all duration-500"
                                style={{
                                    width: `${
                                        ((currentSlide + 1) /
                                            slides.length) *
                                        100
                                    }%`,
                                }}
                            />
                        </div>

                        <span className="text-sm text-gray-400">
                            0{slides.length}
                        </span>

                    </div>
                </div>
            </div>

            {/* Previous / Next */}
            <div className="absolute bottom-8 right-6 flex gap-2 sm:right-10">

                <button
                    onClick={previousSlide}
                    aria-label="Previous slide"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-gray-900"
                >
                    <ArrowLeft size={20} />
                </button>

                <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-gray-900"
                >
                    <ArrowRight size={20} />
                </button>

            </div>

            {/* Dots */}
            <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2">

                {slides.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() =>
                            setCurrentSlide(index)
                        }
                        aria-label={`Go to slide ${
                            index + 1
                        }`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? "w-8 bg-white"
                                : "w-2 bg-white/40 hover:bg-white/70"
                        }`}
                    />
                ))}

            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-950 to-transparent" />
        </section>
    );
};

export default Hero;