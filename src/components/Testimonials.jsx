import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Customer",
    image:
      "https://i.pravatar.cc/150?img=47",
    review:
      "The shopping experience was amazing. The website is clean, fast and extremely easy to navigate.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Verified Customer",
    image:
      "https://i.pravatar.cc/150?img=12",
    review:
      "I loved the product quality and the overall experience. Finding what I needed took only a few seconds.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Verified Customer",
    image:
      "https://i.pravatar.cc/150?img=32",
    review:
      "Beautiful design, smooth checkout and fast delivery. ShopEase has become one of my favorite stores.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Customer stories
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by Our Customers
          </h2>

          <p className="mt-4 text-gray-500">
            See what our customers have to say about their ShopEase
            experience.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group relative rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60"
            >

              {/* Quote */}
              <div className="absolute right-6 top-6 text-indigo-100">
                <Quote size={42} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 min-h-[100px] text-sm leading-7 text-gray-600">
                "{testimonial.review}"
              </p>

              {/* Customer */}
              <div className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-5">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-gray-400">
                    {testimonial.role}
                  </p>
                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;