import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free & Fast Shipping",
    description:
      "Enjoy fast and reliable delivery on eligible orders.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Your payment information is protected with secure technology.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description:
      "Changed your mind? Return eligible products with ease.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our support team is always ready to help whenever you need us.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Why ShopEase
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Made Simple
          </h2>

          <p className="mt-4 text-gray-500">
            We make online shopping easier, safer and more enjoyable
            from discovery to delivery.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/40"
              >

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>

                {/* Small Arrow */}
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-indigo-600 opacity-0 transition duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowRight size={15} />
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;