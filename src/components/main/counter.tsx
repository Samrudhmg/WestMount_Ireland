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
    <div className="rounded-xl bg-gradient-to-r from-[#002328] via-[#003B43] to-[#002328] text-white md:py-6  lg:min-w-full lg:rounded-none lg:py-6">
      <div className="px-4 md:container lg:mx-auto lg:px-0">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-evenly">
          {stats.map((stat, index) => (
            <div key={index} className="relative flex-1 ">
              <div className="flex flex-col items-center justify-center gap-2 py-3 text-center md:flex-wrap md:py-0 lg:flex-row lg:items-baseline lg:py-4">
                <span className="flex items-center justify-center text-2xl font-bold leading-tight text-white md:text-lg lg:text-4xl">
                  <CountUp
                    from="auto"
                    to={stat.count}
                    separator=","
                    direction="up"
                    duration={2}
                    className="text-4xl font-bold text-white"
                  />
                  {index === 2 ? '%' : '+'}
                </span>
                <p className="text-3xl text-white md:text-lg lg:text-2xl">
                  {stat.label}
                </p>
              </div>
              {index !== stats.length - 1 && (
                <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-gray-700 md:left-auto md:right-0 md:h-16 md:w-px" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
