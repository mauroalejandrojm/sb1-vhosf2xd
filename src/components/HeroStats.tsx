import React from "react";

const TICKER_ITEMS = [
  "Data Engineering",
  "ETL Pipelines",
  "Cloud Architecture",
  "Machine Learning",
  "Big Data",
  "Azure",
  "Google Cloud",
  "Apache Spark",
  "Python",
  "PostgreSQL",
  "Data Warehousing",
  "Real-time Analytics",
  "FastAPI",
  "Docker",
  "Kubernetes",
];

const STATS = [
  { value: "7+", label: "Years Experience" },
  { value: "8+", label: "Companies Served" },
  { value: "20+", label: "Data Systems Built" },
  { value: "$4M+", label: "Cost Savings Delivered" },
];

const HeroStats: React.FC = () => {
  return (
    <section className="border-t border-slate-100 bg-white dark:border-white/5 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap items-end gap-8 lg:justify-between">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl font-black text-slate-900 dark:text-white">
                {stat.value}
              </span>

              <span className="mt-1 text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden border-t border-slate-100 bg-slate-50 py-3 dark:border-white/5 dark:bg-dark-800/50">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 whitespace-nowrap"
              aria-hidden={copy === 1}
            >
              {TICKER_ITEMS.map((item) => (
                <span key={`${copy}-${item}`} className="flex shrink-0 items-center">
                  <span className="px-6 text-xs font-mono uppercase tracking-widest text-slate-300 dark:text-slate-700">
                    {item}
                  </span>

                  <span className="text-teal-500/20 dark:text-teal-400/20">
                    ·
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroStats;