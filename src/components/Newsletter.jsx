import { ArrowRight, Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-6 py-14 sm:px-10 lg:px-16">
          
          {/* Background decoration */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-400">
              <Mail size={25} />
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay in the Loop
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Subscribe to get the latest products, exclusive offers and
              shopping inspiration directly in your inbox.
            </p>

            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-12 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-indigo-500"
              />

              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Subscribe

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            <p className="mt-4 text-xs text-gray-600">
              No spam. Unsubscribe anytime.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;