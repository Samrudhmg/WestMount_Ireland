import CountUp from './count-up';

interface CounterItem {
  count: number;
  label: string;
}

interface CounterProps {
  stats: CounterItem[];
}

export default function Counter({ stats }: CounterProps) {
  return (
    <div className="bg-[#1A1A1A] py-8 text-white">
      <div className="mx-auto px-4 md:container">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-evenly">
          {stats.map((stat, index) => (
            <div key={index} className="relative flex-1">
              <div className="flex flex-col items-center justify-center gap-1 py-6 text-center md:flex-wrap md:py-0">
                <span className="flex text-2xl font-bold leading-tight text-iii-accent md:text-lg lg:text-4xl">
                  <CountUp
                    from="auto"
                    to={stat.count}
                    separator=","
                    direction="up"
                    duration={2}
                    className="text-4xl font-bold text-iii-accent"
                  />
                  +
                </span>
                <p className="text-3xl font-semibold text-white md:text-lg lg:text-2xl">{stat.label}</p>
              </div>
              {index !== stats.length - 1 && (
                <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-gray-700 md:inset-y-1/4 md:left-auto md:right-0 md:h-12 md:w-px" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
