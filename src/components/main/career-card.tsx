import { cn } from '@/lib/utils';

export interface JobList {
  title: string;
  items: string[];
}

export interface CareerCardProps {
  title: string;
  subtitle?: string;
  jobs?: string[];
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function CareerCard({ title, subtitle, jobs, className, variant = 'secondary' }: Readonly<CareerCardProps>) {
  return (
    <div
      className={cn(
        'rounded-3xl p-6',
        variant === 'primary' ? 'bg-iii-primary text-white' : 'bg-[#1A1A1A] text-white',
        className,
      )}
    >
      {(variant === 'primary' && (!jobs || jobs.length === 0)) && (
        <div className="mb-6">
          <img src="/icons/job-icon.svg" title="Job" alt="Job Icon" />
        </div>
      )}
      <h3 className="text-wrap text-2xl font-bold leading-tight md:text-xl">{title}</h3>
      {subtitle && <p className="mt-2 text-sm text-gray-300">{subtitle}</p>}
      {jobs && jobs.length > 0 && (
        <ul className="mt-6 space-y-4">
          {jobs.map((job, index) => (
            <li key={index} className="flex items-center gap-2">
              <img src={`/icons/${variant === 'primary' ? 'Star-white' : 'star'}.svg`} alt="star" title="star" className="size-4" />
              <span className="text-sm">{job}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
