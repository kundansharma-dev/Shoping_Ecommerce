import { useEffect, useState } from "react";
import { Clock3, ArrowRight, ShoppingBag } from "lucide-react";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-3xl bg-gray-950">

          <div className="grid lg:grid-cols-2">

            {/* Left Content */}
            <div className="relative flex flex-col justify-center overflow-hidden p-8 sm:p-12 lg:p-16">

              {/* Background effects */}
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />
              <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />

              <div className="relative">

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  Flash Sale
                </div>

                <h2 className="max-w-lg text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Big Deals.
                  <span className="block text-indigo-400">
                    Limited Time.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg leading-7 text-gray-400">
                  Get exclusive discounts on selected products before the
                  offer disappears.
                </p>

                {/* Countdown */}
                <div className="mt-8">

                  <div className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-400">
                    <Clock3 size={17} />
                    Offer ends in
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">

                    <TimeBox
                      value={formatTime(timeLeft.hours)}
                      label="Hours"
                    />

                    <span className="text-2xl font-bold text-gray-600">
                      :
                    </span>

                    <TimeBox
                      value={formatTime(timeLeft.minutes)}
                      label="Minutes"
                    />

                    <span className="text-2xl font-bold text-gray-600">
                      :
                    </span>

                    <TimeBox
                      value={formatTime(timeLeft.seconds)}
                      label="Seconds"
                    />

                  </div>
                </div>

                <button className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500">
                  Shop Flash Sale

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

              </div>
            </div>

            {/* Right Product Visual */}
            <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 p-8">

              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-black/20 blur-3xl" />

              {/* Product */}
              <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-white/10 shadow-2xl backdrop-blur-sm">

                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-white shadow-2xl">

                  <ShoppingBag
                    size={100}
                    strokeWidth={1}
                    className="text-gray-900"
                  />

                </div>

              </div>

              {/* Discount Badge */}
              <div className="absolute right-6 top-6 rounded-2xl bg-white px-5 py-4 text-center shadow-xl sm:right-10 sm:top-10">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Save up to
                </p>

                <p className="text-3xl font-black text-indigo-600">
                  50%
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

const TimeBox = ({ value, label }) => {
  return (
    <div className="min-w-[65px] rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur sm:min-w-[75px]">
      <div className="text-2xl font-bold text-white">
        {value}
      </div>

      <div className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">
        {label}
      </div>
    </div>
  );
};

export default FlashSale;