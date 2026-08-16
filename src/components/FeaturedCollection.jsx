import { ArrowRight, Sparkles } from "lucide-react";

const collections = [
  {
    title: "Minimal Essentials",
    description: "Clean designs made for everyday living.",
    button: "Shop Collection",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tech & Lifestyle",
    description: "Smart products for a smarter lifestyle.",
    button: "Explore Tech",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=80",
  },
];

const FeaturedCollection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-10">

          <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            <Sparkles size={16} />
            Curated for you
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Collections
          </h2>

          <p className="mt-3 max-w-xl text-gray-500">
            Discover collections carefully selected to bring style,
            quality and functionality together.
          </p>

        </div>

        {/* Collection Grid */}
        <div className="grid gap-6 lg:grid-cols-2">

          {collections.map((collection) => (
            <div
              key={collection.title}
              className="group relative min-h-[420px] overflow-hidden rounded-3xl bg-gray-900"
            >

              {/* Background Image */}
              <img
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5" />

              {/* Content */}
              <div className="relative flex h-full min-h-[420px] flex-col justify-end p-7 sm:p-10">

                <p className="mb-3 text-sm font-medium text-indigo-300">
                  Featured Collection
                </p>

                <h3 className="max-w-md text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {collection.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-gray-300 sm:text-base">
                  {collection.description}
                </p>

                <button className="group/button mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-indigo-600 hover:text-white">

                  {collection.button}

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover/button:translate-x-1"
                  />

                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;