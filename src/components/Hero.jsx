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
            "https://images.unsplash.com/photo-1713256683892-5bab22f76be0?q=80&w=1170&auto=format&fit=crop",
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
            "https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=1170&auto=format&fit=crop",
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
        }, 4000);

        return () => clearInterval(timer);
    }, [isPaused]);

    const slide = slides[currentSlide];

    return (
        <section
            className="
                relative
                w-full
                overflow-hidden
                bg-gray-950
            "
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >

            {/* =========================================
                BACKGROUND SLIDER
            ========================================== */}

            <div className="absolute inset-0">

                {slides.map((item, index) => (
                    <div
                        key={item.id}
                        className={`
                            absolute
                            inset-0
                            transition-all
                            duration-1000
                            ease-out
                            ${index === currentSlide
                                ? "scale-100 opacity-100"
                                : "scale-110 opacity-0"
                            }
                        `}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="
                                h-full
                                w-full
                                object-cover
                            "
                        />
                    </div>
                ))}

                {/* Light Dark Overlay */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-black/25
                    "
                />

                {/* Gradient */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-black/55
                        via-black/20
                        to-black/5
                    "
                />

                {/* Bottom Gradient */}

                <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        h-28
                        bg-gradient-to-t
                        from-gray-950/80
                        to-transparent
                    "
                />

            </div>


            {/* =========================================
                CONTENT
            ========================================== */}

            <div
                className="
                    relative
                    mx-auto
                    flex
                    min-h-[620px]
                    w-full
                    max-w-7xl
                    items-center
                    px-4
                    py-16
                    sm:min-h-[680px]
                    sm:px-6
                    sm:py-20
                    lg:px-8
                "
            >

                <div
                    key={slide.id}
                    className="
                        w-full
                        max-w-3xl
                        animate-[fadeUp_.7s_ease-out]
                    "
                >

                    {/* =================================
                        GLASS CARD
                    ================================= */}

                    <div
                        className="
                            rounded-3xl
                            border
                            border-white/20
                            bg-white/[0.025]
                            p-6
                            shadow-2xl
                            shadow-black/10
                            backdrop-blur-[5px]
                            sm:p-8
                            lg:p-10
                        "
                    >

                        {/* Badge */}

                        <span
                            className="
                                inline-flex
                                rounded-full
                                border
                                border-white/25
                                bg-white/[0.08]
                                px-3
                                py-2
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-white
                                backdrop-blur-md
                                sm:px-4
                                sm:text-xs
                            "
                        >
                            {slide.badge}
                        </span>


                        {/* Heading */}

                        <h1
                            className="
                                mt-5
                                text-4xl
                                font-black
                                leading-[1.05]
                                tracking-tight
                                text-white
                                sm:mt-6
                                sm:text-5xl
                                md:text-6xl
                                lg:text-7xl
                            "
                        >
                            {slide.title}
                            <br />

                            <span className="text-indigo-400">
                                {slide.highlight}
                            </span>
                        </h1>


                        {/* Description */}

                        <p
                            className="
                                mt-5
                                max-w-xl
                                text-sm
                                leading-6
                                text-gray-200
                                sm:mt-6
                                sm:text-base
                                sm:leading-7
                                lg:text-lg
                            "
                        >
                            {slide.description}
                        </p>


                        {/* =================================
                            BUTTONS
                        ================================= */}

                        <div
                            className="
                                mt-7
                                flex
                                w-full
                                flex-col
                                gap-3
                                sm:mt-8
                                sm:flex-row
                            "
                        >

                            {/* Shop Button */}

                            <Link
                                to="/shop"
                                className="
                                    group
                                    inline-flex
                                    min-h-12
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-indigo-400/40
                                    bg-indigo-600/90
                                    px-5
                                    py-3
                                    text-sm
                                    font-bold
                                    text-white
                                    shadow-lg
                                    shadow-indigo-600/20
                                    backdrop-blur-md
                                    transition
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-indigo-500
                                    hover:shadow-indigo-500/30
                                    sm:w-auto
                                    sm:px-6
                                "
                            >
                                <ShoppingBag size={18} />

                                <span>
                                    {slide.button}
                                </span>

                                <ArrowRight
                                    size={17}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                />
                            </Link>


                            {/* View Products */}

                            <Link
                                to="/shop"
                                className="
                                    inline-flex
                                    min-h-12
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-white/25
                                    bg-white/[0.08]
                                    px-5
                                    py-3
                                    text-sm
                                    font-bold
                                    text-white
                                    backdrop-blur-md
                                    transition
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-white/20
                                    sm:w-auto
                                    sm:px-6
                                "
                            >
                                View Products
                            </Link>

                        </div>


                        {/* =================================
                            SLIDE PROGRESS
                        ================================= */}

                        <div
                            className="
                                mt-8
                                flex
                                items-center
                                gap-3
                                sm:mt-10
                                sm:gap-4
                            "
                        >

                            <span
                                className="
                                    text-xs
                                    font-bold
                                    text-white
                                    sm:text-sm
                                "
                            >
                                0{currentSlide + 1}
                            </span>


                            <div
                                className="
                                    h-px
                                    w-14
                                    bg-white/30
                                    sm:w-20
                                "
                            >
                                <div
                                    className="
                                        h-full
                                        bg-white
                                        transition-all
                                        duration-500
                                    "
                                    style={{
                                        width: `${((currentSlide + 1) /
                                                slides.length) *
                                            100
                                            }%`,
                                    }}
                                />
                            </div>


                            <span
                                className="
                                    text-xs
                                    text-gray-400
                                    sm:text-sm
                                "
                            >
                                0{slides.length}
                            </span>

                        </div>

                    </div>

                </div>

            </div>


            {/* =========================================
                PREVIOUS / NEXT
            ========================================== */}

            <div
                className="
                    absolute
                    bottom-6
                    right-4
                    z-30
                    flex
                    gap-2
                    sm:bottom-8
                    sm:right-8
                "
            >

                <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="Previous slide"
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/25
                        bg-white/[0.08]
                        text-white
                        backdrop-blur-md
                        transition
                        hover:bg-white/20
                        sm:h-12
                        sm:w-12
                    "
                >
                    <ArrowLeft size={18} />
                </button>


                <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/25
                        bg-white/[0.08]
                        text-white
                        backdrop-blur-md
                        transition
                        hover:bg-white/20
                        sm:h-12
                        sm:w-12
                    "
                >
                    <ArrowRight size={18} />
                </button>

            </div>


            {/* =========================================
                DOTS
            ========================================== */}

            <div
                className="
                    absolute
                    bottom-7
                    left-1/2
                    z-30
                    flex
                    -translate-x-1/2
                    gap-2
                    sm:bottom-10
                "
            >

                {slides.map((item, index) => (
                    <button
                        type="button"
                        key={item.id}
                        onClick={() =>
                            setCurrentSlide(index)
                        }
                        aria-label={`Go to slide ${index + 1
                            }`}
                        className={`
                            h-2
                            rounded-full
                            transition-all
                            duration-300
                            ${index === currentSlide
                                ? "w-8 bg-white"
                                : "w-2 bg-white/40 hover:bg-white/70"
                            }
                        `}
                    />
                ))}

            </div>

        </section>
    );
};

export default Hero;