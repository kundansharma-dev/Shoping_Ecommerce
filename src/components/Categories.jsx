import {
  Smartphone,
  Shirt,
  Sparkles,
  Home,
  Watch,
  Dumbbell,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    description: "Latest gadgets",
    icon: Smartphone,
  },
  {
    name: "Fashion",
    description: "Trending styles",
    icon: Shirt,
  },
  {
    name: "Beauty",
    description: "Beauty essentials",
    icon: Sparkles,
  },
  {
    name: "Home & Living",
    description: "Upgrade your space",
    icon: Home,
  },
  {
    name: "Accessories",
    description: "Complete your look",
    icon: Watch,
  },
  {
    name: "Sports",
    description: "Gear up & move",
    icon: Dumbbell,
  },
];

const Categories = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Shop by category
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Categories
            </h2>

            <p className="mt-3 max-w-xl text-gray-500">
              Find everything you need from our carefully selected collections.
            </p>
          </div>

          <button className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-gray-900 transition hover:text-indigo-600 sm:self-auto">
            View all
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
              >
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-gray-900">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {category.description}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition group-hover:bg-indigo-50 group-hover:text-indigo-600">
                  <ArrowRight size={14} />
                </div>
              </button>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Categories;